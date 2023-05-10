import { ApiProperty } from '@nestjs/swagger'
import { IsString, MaxLength } from 'class-validator'

export class CreateTwitDto {
  @IsString()
  @MaxLength(140) //TODO check with frontend
  @ApiProperty()
  content: string
}
