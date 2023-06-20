import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsInt, IsOptional, Max } from 'class-validator'

import { GetUsersQueryI } from '@shared/user/dtos'

export class GetUsersQuery implements GetUsersQueryI {
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
  page?: number
}
