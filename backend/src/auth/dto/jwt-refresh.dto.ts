import { ApiProperty } from '@nestjs/swagger'
import { IsJWT } from 'class-validator'

export class JwtRefreshDto {
  @IsJWT()
  @ApiProperty()
  refreshToken: string
}
