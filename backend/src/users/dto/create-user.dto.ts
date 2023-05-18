import { IsEmail, IsString, Length, MaxLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

import { UserI } from '../../../../shared/interfaces'

export class CreateUserDto
  implements Omit<UserI, 'id' | 'createdAt' | 'updatedAt'>
{
  @IsString()
  @MaxLength(20) //TODO check frontend form
  @ApiProperty()
  readonly username: string

  @IsString()
  @MaxLength(20) //TODO check frontend form
  @ApiProperty()
  readonly nickname: string

  @IsString()
  @IsEmail()
  @ApiProperty()
  readonly email: string

  @IsString()
  @Length(8, 20) //TODO check frontend form
  @ApiProperty()
  readonly password: string
}
