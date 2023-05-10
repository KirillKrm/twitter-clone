import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersModule } from '../users/users.module'

import { TwitsController } from './twits.controller'
import { TwitsService } from './twits.service'
import { Twit } from './twit.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Twit]), UsersModule],
  controllers: [TwitsController],
  providers: [TwitsService],
  exports: [TwitsService],
})
export class TwitsModule {}
