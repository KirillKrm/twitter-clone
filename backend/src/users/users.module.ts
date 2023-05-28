import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UsersController } from './users.controller'
import { MeController } from './me.controller'
import { UsersService } from './users.service'
import { User } from './entities/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController, MeController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
