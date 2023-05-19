import { ApiPropertyOptional } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsInt, IsOptional } from 'class-validator'

export class GetTwitsQuery {
  @IsInt()
  @Type(() => Number)
  @IsOptional()
  @ApiPropertyOptional()
  limit?: number

  @IsInt()
  @Type(() => Number)
  @IsOptional()
  @ApiPropertyOptional()
  token?: number
}
