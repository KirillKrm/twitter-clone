import { ApiProperty } from '@nestjs/swagger'
import { PaginatedOffsetStrategyI } from '../../../../shared/interfaces'

import { User } from '../user.entity'

export class PaginatedUsers implements PaginatedOffsetStrategyI<User> {
  @ApiProperty({ type: [User] })
  data: User[]

  @ApiProperty()
  limit: number

  @ApiProperty()
  page: number
}
