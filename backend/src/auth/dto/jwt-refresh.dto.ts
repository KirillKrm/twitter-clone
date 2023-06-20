import { ApiProperty } from '@nestjs/swagger'
import { IsJWT } from 'class-validator'

import { JwtRefreshDtoI } from '@shared/auth/dtos'

export class JwtRefreshDto implements JwtRefreshDtoI {
  @IsJWT()
  @ApiProperty()
  refreshToken: string
}
