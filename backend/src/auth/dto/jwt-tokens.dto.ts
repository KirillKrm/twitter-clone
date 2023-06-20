import { ApiProperty } from '@nestjs/swagger'
import { IsJWT } from 'class-validator'

import { JwtTokensDtoI } from '@shared/auth/dtos'

export class JwtTokensDto implements JwtTokensDtoI {
  @IsJWT()
  @ApiProperty()
  jwtAccessToken: string

  @IsJWT()
  @ApiProperty()
  jwtRefreshToken: string
}
