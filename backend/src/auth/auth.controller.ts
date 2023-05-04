import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common'

import { User } from '../users/entities/user.entity'
import { AuthService } from './auth.service'
import { JwtRefreshDto, LoginDto, RegisterDto } from './dto'
import { LocalAuthGuard } from './local-auth.guard'

@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() payload: RegisterDto): Promise<User> {
    return this.authService.register(payload)
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  async login(@Body() loginDto: LoginDto) {
    console.log(loginDto)
    return this.authService.getJwtTokens(loginDto.username, loginDto.password)
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  async refresh(@Body() jwtRefreshDto: JwtRefreshDto) {
    return this.authService.refreshJwt(jwtRefreshDto)
  }
}
