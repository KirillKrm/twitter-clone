import { IsString, Length } from 'class-validator'

export class LoginDto {
  @IsString()
  // TODO check size restrictions
  readonly username: string

  @IsString()
  @Length(8, 20) //TODO check frontend form
  readonly password: string
}
