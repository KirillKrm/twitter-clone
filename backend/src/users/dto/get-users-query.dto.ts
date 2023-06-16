import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsInt, IsOptional, Max } from 'class-validator'

export class GetUsersQuery {
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
