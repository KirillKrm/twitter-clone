import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

import { PaginatedTwitsI } from '@shared/twit/dtos'

import { Twit } from '../twit.entity'

export class PaginatedTwits implements PaginatedTwitsI {
  @ApiProperty({ type: [Twit] })
  data: Twit[]

  @ApiPropertyOptional()
  nextToken?: number
}
