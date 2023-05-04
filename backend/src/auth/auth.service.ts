import { Injectable, UnauthorizedException } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { JwtService } from '@nestjs/jwt'

import { Hash } from '../common/lib/hash'
import { CreateUserDto } from '../users/dto/create-user.dto'
import { UsersService } from '../users/users.service'
import { User } from '../users/entities/user.entity'

import { RegisterDto } from './dto/register.dto'
import { JwtRefreshDto } from './dto'

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(payload: RegisterDto): Promise<User> {
    const userPayload: CreateUserDto = payload

    return this.usersService.create(userPayload)
  }

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username)
    console.log(user)
    console.log(user && Hash.compare(pass, user.password))
    if (user && Hash.compare(pass, user.password)) {
      return { id: user.id, username: user.username }
    }

    return null
  }

  async getJwtTokens(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username)

    const payload = { username: user.username, userId: user.id } //TODO give payload a type JwtPayload

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

  async refreshJwt(jwtRefreshDto: JwtRefreshDto) {
    let jwtVerifyRes
    try {
      jwtVerifyRes = this.jwtService.verify(jwtRefreshDto.refreshToken, {
        secret: this.configService.get('JWT_REFRESH_SECRET'),
      })
    } catch (e) {
      throw new UnauthorizedException('Invalid jwt')
    }
    console.log(jwtVerifyRes) //TODO give payload a type JwtPayload

    const user: User = await this.usersService.findOne(jwtVerifyRes.userId)

    return this.getJwtTokens(user.username, user.password)
  }
}
