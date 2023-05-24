import { ApiProperty } from '@nestjs/swagger'
import { IsJWT } from 'class-validator'

export class JwtTokensDto {
  @IsJWT()
  @ApiProperty()
  jwtAccessToken: string

  @IsJWT()
  @ApiProperty()
  jwtRefreshToken: string
}
