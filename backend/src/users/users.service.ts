import {
  ConflictException,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'

import { User } from './user.entity'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { GetUsersQuery } from './dto/get-users-query.dto'
import { PaginatedUsers } from './dto/paginated-users.dto'

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

  async findAll({
    limit = 20,
    page = 0,
  }: GetUsersQuery = {}): Promise<PaginatedUsers> {
    const query = this.userRepository
      .createQueryBuilder('user')
      .orderBy('user.createdAt')
      .offset(limit * page)
      .limit(limit)

    const users = await query.getMany()
    if (!users || !users.length) {
      throw new NotFoundException('Users not found')
    }
    this.logger.log(`${users.length} users fetched successfully`)

    const res: PaginatedUsers = {
      data: users,
      limit,
      page,
    }

    return res
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
