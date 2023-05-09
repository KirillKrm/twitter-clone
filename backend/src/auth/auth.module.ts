import { Module } from '@nestjs/common'
import { PassportModule } from '@nestjs/passport'

import { UsersModule } from '../users/users.module'

import { AuthService } from './auth.service'
import { AuthController } from './auth.controller'
import { LocalStrategy } from './local.strategy'

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
