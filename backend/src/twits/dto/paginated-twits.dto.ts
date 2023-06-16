import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

import { PaginatedTokenStrategyI } from '../../../../shared/interfaces'

import { Twit } from '../twit.entity'

export class PaginatedTwits implements PaginatedTokenStrategyI<Twit> {
  @ApiProperty({ type: [Twit] })
  data: Twit[]

  @ApiPropertyOptional()
  nextToken?: number
}
