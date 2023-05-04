import { IsNotEmpty } from 'class-validator'

export class JwtRefreshDto {
  @IsNotEmpty()
  refreshToken: string
}
