import { ApiProperty } from '@nestjs/swagger'
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

import { User } from '../users/entities/user.entity'

@Entity()
export class Twit {
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
