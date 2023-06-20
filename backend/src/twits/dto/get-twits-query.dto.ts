import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsInt, IsOptional, Max } from 'class-validator'

import { GetTwitsQueryI } from '@shared/twit/dtos'

export class GetTwitsQuery implements GetTwitsQueryI {
  @IsInt()
  @Max(40)
  @Type(() => Number)
  @IsOptional()
  @ApiPropertyOptional()
  limit?: number

  @IsInt()
  @Type(() => Number)
  @IsOptional()
  @ApiPropertyOptional()
  token?: number

  @IsInt()
  @Type(() => Number)
  @IsOptional()
  @ApiPropertyOptional()
  userId?: number
}
