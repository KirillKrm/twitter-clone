import { IsEmail, IsString, Length, MaxLength } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @MaxLength(20) //TODO check frontend form
  readonly username: string

  @IsString()
  @IsEmail()
  readonly email: string

  @IsString()
  @Length(8, 20) //TODO check frontend form
  readonly password: string
}
