import { ApiProperty } from '@nestjs/swagger'
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../users/entities/user.entity'
import { TwitI } from '../../../shared/interfaces'

@Entity()
export class Twit extends BaseEntity implements TwitI {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number

  @ManyToOne(() => User)
  @ApiProperty()
  author: User

  @Column()
  @ApiProperty()
  content: string

  // TODO
  // likes: number

  // TODO
  // comments: number

  // TODO
  // retwits: number

  // TODO
  // views: number

  @CreateDateColumn()
  @ApiProperty()
  createdAt: Date

  @UpdateDateColumn()
  @ApiProperty()
  updatedAt: Date
}
