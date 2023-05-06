import { ApiProperty } from '@nestjs/swagger'

export class JwtTokensDto {
  @ApiProperty()
  jwtAccessToken: string

  @ApiProperty()
  jwtRefreshToken: string
}
