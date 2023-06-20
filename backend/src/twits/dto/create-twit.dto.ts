import { ApiProperty } from '@nestjs/swagger'
import { IsString, MaxLength } from 'class-validator'

import { CreateTwitDtoI } from '@shared/twit/dtos'

export class CreateTwitDto implements CreateTwitDtoI {
  @IsString()
  @MaxLength(140) //TODO check with frontend
  @ApiProperty()
  content: string
}
