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

  async findAll(): Promise<Twit[]> {
    const twits = await this.twitRepository.find({
      relations: { author: true },
    })
    if (!twits || !twits.length) {
      throw new NotFoundException('Twits not found')
    }
    this.logger.log(`${twits.length} twits fetched successfully`)

    return twits
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
