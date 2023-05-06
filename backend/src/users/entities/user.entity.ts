import { ApiProperty } from '@nestjs/swagger'
import { Exclude } from 'class-transformer'
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BaseEntity,
} from 'typeorm'
import { PasswordTransformer } from '../../common/transformers/password.transformer'

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('increment')
  @ApiProperty()
  id: number

  @Column()
  @ApiProperty()
  username: string

  @Column({ unique: true })
  @ApiProperty()
  email: string

  @Column({
    transformer: new PasswordTransformer(),
  })
  @Exclude({ toPlainOnly: true })
  @ApiProperty()
  password: string

  // TODO
  // @OneToMany(() => Twit, twit => twit.user)
  // twits: Twit[]

  // TODO
  // @OneToMany(() => Like, like => like.user)
  // likes: Like[]
}
