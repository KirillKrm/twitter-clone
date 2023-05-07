import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

import { Hash } from '../common/lib/hash'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { UsersService } from '../users/users.service'
import { User } from '../users/entities/user.entity'

import { RegisterDto, JwtRefreshDto, JwtTokensDto } from './dto'
import { JwtPayload } from './types'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(payload: RegisterDto): Promise<User> {
    const userPayload: CreateUserDto = payload
    const user = await this.usersService.create(userPayload)

    return this.usersService.findOneByUsername(payload.username)
  }

  async validateUser(
    username: string,
    pass: string,
  ): Promise<JwtPayload | null> {
    const user = await this.usersService.findOneByUsername(username)
    if (user && Hash.compare(pass, user.password)) {
      return { id: user.id, username: user.username }
    }

    return null
  }

  async getJwtTokens(username: string, pass: string): Promise<JwtTokensDto> {
    const user = await this.usersService.findOneByUsername(username)

    const payload: JwtPayload = { username: user.username, id: user.id }

    const jwtAccessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: `${this.configService.get('JWT_ACCESS_EXPIRE')}s`,
    })

    const jwtRefreshToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_REFRESH_SECRET'),
      expiresIn: `${this.configService.get('JWT_REFRESH_EXPIRE')}s`,
    })

    return {
      jwtAccessToken,
      jwtRefreshToken,
    }
  }

  async refreshJwt(jwtRefreshDto: JwtRefreshDto): Promise<JwtTokensDto> {
    let jwtVerifyRes: JwtPayload
    try {
      jwtVerifyRes = this.jwtService.verify(jwtRefreshDto.refreshToken, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      })
    } catch (e) {
      throw new UnauthorizedException('Invalid jwt')
    }

    const user: User = await this.usersService.findOne(jwtVerifyRes.id)
    const payload: JwtPayload = { username: user.username, id: user.id }
    const jwtAccessToken = this.jwtService.sign(payload, {
      secret: this.configService.get('JWT_SECRET'),
      expiresIn: `${this.configService.get('JWT_ACCESS_EXPIRE')}s`,
    })

    return {
      jwtAccessToken,
      jwtRefreshToken: jwtRefreshDto.refreshToken,
    }
  }
}
