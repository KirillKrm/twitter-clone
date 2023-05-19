import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from './entities/user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UsersService {
  private readonly logger = new Logger(UsersService.name)

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const checkByEmail = await this.userRepository.findOneBy({
      email: createUserDto.email,
    })
    if (checkByEmail) {
      throw new ConflictException('Email adress already taken')
    }

    const checkByUsername = await this.userRepository.findOneBy({
      username: createUserDto.username,
    })
    if (checkByUsername) {
      throw new ConflictException('Username already taken')
    }

    const checkByNickname = await this.userRepository.findOneBy({
      nickname: createUserDto.nickname,
    })
    if (checkByNickname) {
      throw new ConflictException('Nickname already taken')
    }

    const res = await this.userRepository.save(createUserDto)
    this.logger.log(`User ${res.id} created successfully`)

    return res
  }

  // TODO filter + pagination
  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find()
    if (!users || !users.length) {
      throw new NotFoundException('Users not found')
    }
    this.logger.log(`${users.length} users fetched successfully`)

    return users
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) {
      throw new NotFoundException('User not found')
    }
    this.logger.log(`User ${user.id} fetched successfully`)

    return user
  }

  async findOneByUsername(username: string): Promise<User> {
    const user = await this.userRepository.findOneBy({ username })
    if (!user) {
      throw new NotFoundException('User not found')
    }
    this.logger.log(`User ${user.id} fetched successfully`)

    return user
  }

  // async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
  //   await this.userRepository.update(id, updateUserDto)
  //   return this.userRepository.findOneBy({ id })
  // }

  async remove(id: number): Promise<User> {
    const user = await this.userRepository.findOneBy({ id })
    if (!user) {
      throw new NotFoundException('User not found')
    }

    const res = await this.userRepository.delete(id)
    this.logger.log(`User ${user.id} deleted successfully`)

    return user
  }
}
