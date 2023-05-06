import { IsEmail, IsString, Length, MaxLength } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class CreateUserDto {
  @IsString()
  @MaxLength(20) //TODO check frontend form
  @ApiProperty()
  readonly username: string

  @IsString()
  @IsEmail()
  @ApiProperty()
  readonly email: string

  @IsString()
  @Length(8, 20) //TODO check frontend form
  @ApiProperty()
  readonly password: string
}
