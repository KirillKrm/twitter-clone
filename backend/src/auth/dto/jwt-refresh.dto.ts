import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty } from 'class-validator'

export class JwtRefreshDto {
  @IsNotEmpty()
  @ApiProperty()
  refreshToken: string
}
