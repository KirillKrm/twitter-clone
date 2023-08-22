import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsOptional } from 'class-validator'

export class GetUsersQuery {
  @IsOptional()
  @ApiPropertyOptional()
  readonly nickname?: string
}
