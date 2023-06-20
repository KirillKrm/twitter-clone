import { ApiProperty } from '@nestjs/swagger'

import { PaginatedUsersI } from '@shared/user/dtos'

import { User } from '../user.entity'

export class PaginatedUsers implements PaginatedUsersI {
  @ApiProperty({ type: [User] })
  data: User[]

  @ApiProperty()
  limit: number

  @ApiProperty()
  page: number
}
