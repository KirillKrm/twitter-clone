import { IsString, Length } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class LoginDto {
  @IsString()
  @ApiProperty()
  // TODO check size restrictions
  readonly username: string

  @IsString()
  @Length(8, 20) //TODO check frontend form
  @ApiProperty()
  readonly password: string
}
