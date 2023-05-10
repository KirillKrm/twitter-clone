import {
  ForbiddenException,
  Injectable,
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

    return this.twitRepository.save(newTwit)
  }

  async findAll(): Promise<Twit[]> {
    const twits = await this.twitRepository.find({
      relations: { author: true },
    })
    if (!twits || !twits.length) {
      throw new NotFoundException('Twits not found')
    }

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
    console.log(res)

    return this.findOne(twitId)
  }

  async remove(userId: number, twitId: number) {
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

    return twit
  }
}
