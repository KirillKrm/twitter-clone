import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { User } from '../users/entities/user.entity'
import { AuthService } from './auth.service'
import { JwtRefreshDto, LoginDto, RegisterDto, JwtTokensDto } from './dto'
import { LocalAuthGuard } from './local-auth.guard'

@ApiTags('auth')
@Controller({
  path: 'auth',
  version: '1',
})
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({
    summary: 'User registration',
    description: 'Endpoint to register a new user.',
  })
  @ApiResponse({
    status: 201,
    description: 'Returns the newly created user.',
    type: User,
  })
  async register(@Body() payload: RegisterDto): Promise<User> {
    return this.authService.register(payload)
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @UseGuards(LocalAuthGuard)
  @ApiOperation({
    summary: 'User login',
    description: 'Endpoint to log in a user.',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns a JWT token pair.',
    type: JwtTokensDto,
  })
  async login(@Body() loginDto: LoginDto): Promise<JwtTokensDto> {
    return this.authService.getJwtTokens(loginDto.username, loginDto.password)
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Refresh JWT token',
    description: 'Endpoint to refresh a JWT token.',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns a new JWT token pair.',
    type: JwtTokensDto,
  })
  async refresh(@Body() jwtRefreshDto: JwtRefreshDto): Promise<JwtTokensDto> {
    return this.authService.refreshJwt(jwtRefreshDto)
  }
}
