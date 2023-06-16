import {
  ForbiddenException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { UsersService } from '../users/users.service'

import { CreateTwitDto } from './dto/create-twit.dto'
import { UpdateTwitDto } from './dto/update-twit.dto'
import { GetTwitsQuery } from './dto/get-twits-query.dto'
import { PaginatedTwits } from './dto/paginated-twits.dto'
import { Twit } from './twit.entity'

@Injectable()
export class TwitsService {
  private readonly logger = new Logger(TwitsService.name)

  constructor(
    @InjectRepository(Twit)
    private readonly twitRepository: Repository<Twit>,
    private readonly usersService: UsersService,
  ) {}

  async create(userId: number, createTwitDto: CreateTwitDto): Promise<Twit> {
    const user = await this.usersService.findOne(userId)

    const newTwit = Object.assign(new Twit(), {
      ...createTwitDto,
      author: user,
    })

    const res = await this.twitRepository.save(newTwit)
    this.logger.log(`Twit ${res.id} created successfully`)

    return res
  }

  async findAll({
    limit = 20,
    token,
    userId,
  }: GetTwitsQuery = {}): Promise<PaginatedTwits> {
    const query = this.twitRepository
      .createQueryBuilder('twit')
      .leftJoinAndSelect('twit.author', 'user')
      .orderBy('twit.createdAt', 'DESC')
      .limit(limit)

    if (token) {
      query.andWhere('twit.createdAt < :token', { token: new Date(token) })
    }

    if (userId) {
      query.andWhere('user.id = :userId', { userId })
    }

    const twits = await query.getMany()
    if (!twits || !twits.length) {
      throw new NotFoundException('Twits not found')
    }
    this.logger.log(`${twits.length} twits fetched successfully`)

    const res: PaginatedTwits = {
      data: twits,
      nextToken: twits.at(-1).createdAt.getTime(),
    }

    return res
  }

  async findOne(id: number): Promise<Twit> {
    const twit = await this.twitRepository.findOne({
      where: { id },
      relations: { author: true },
    })
    if (!twit) {
      throw new NotFoundException('Twit not found')
    }
    this.logger.log(`Twit ${twit.id} fetched successfully`)

    return twit
  }

  async update(
    userId: number,
    twitId: number,
    updateTwitDto: UpdateTwitDto,
  ): Promise<Twit> {
    const twit = await this.twitRepository.findOne({
      where: { id: twitId },
      relations: { author: true },
    })
    if (!twit) {
      throw new NotFoundException('Twit not found')
    }

    if (twit.author.id !== userId) {
      throw new ForbiddenException(
        'You do not have permission to update this resource.',
      )
    }

    const res = await this.twitRepository.update({ id: twitId }, updateTwitDto)
    this.logger.log(`Twit ${twitId} updated successfully`)

    return this.findOne(twitId)
  }

  async remove(userId: number, twitId: number): Promise<Twit> {
    const twit = await this.twitRepository.findOne({
      where: { id: twitId },
      relations: { author: true },
    })
    if (!twit) {
      throw new NotFoundException('Twit not found')
    }

    if (twit.author.id !== userId) {
      throw new ForbiddenException(
        'You do not have permission to update this resource.',
      )
    }

    const res = await this.twitRepository.delete({ id: twitId })
    this.logger.log(`Twit ${twitId} deleted successfully`)

    return twit
  }
}
