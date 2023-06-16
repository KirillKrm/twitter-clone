import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common'
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger'

import { User } from '../users/user.entity'
import { ExceptionResponseDto } from '../common/dto/exception-response.dto'

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
    status: HttpStatus.CREATED,
    description: 'Returns the newly created user.',
    type: User,
  })
  @ApiResponse({
    status: HttpStatus.CONFLICT,
    description: 'User with such credentials already exists',
    type: ExceptionResponseDto,
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
    status: HttpStatus.OK,
    description: 'Returns a JWT token pair.',
    type: JwtTokensDto,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Invalid credentials.',
    type: ExceptionResponseDto,
  })
  async login(@Body() loginDto: LoginDto): Promise<JwtTokensDto> {
    return this.authService.getJwtTokens(loginDto.username)
  }

  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Refresh JWT token',
    description: 'Endpoint to refresh a JWT token.',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Returns a new JWT token pair.',
    type: JwtTokensDto,
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Provided JWT is invalid.',
    type: ExceptionResponseDto,
  })
  async refresh(@Body() jwtRefreshDto: JwtRefreshDto): Promise<JwtTokensDto> {
    return this.authService.refreshJwt(jwtRefreshDto)
  }
}
