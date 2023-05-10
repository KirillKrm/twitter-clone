import { ClassSerializerInterceptor, Logger, Module } from '@nestjs/common'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm'
import { validateSync } from 'class-validator'

import { EnvConfigSchema } from './config/env.config'
import { TwitsModule } from './twits/twits.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { GlobalJwtModule } from './auth/jwt.module'
import { join } from 'path'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: (config: Record<string, unknown>) => {
        const envConfig = Object.assign(new EnvConfigSchema(), config)
        const errors = validateSync(envConfig)
        if (errors.length > 0) {
          throw new Error(
            `Config validation error:\n ${JSON.stringify(errors)}`,
          )
        }

        return envConfig
      },
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) =>
        ({
          type: configService.get('DB_TYPE'),
          host: configService.get('DB_HOST'),
          port: +configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
          entities: [join(process.cwd(), '**/**.entity.{js,ts}')],
          ssl: {
            rejectUnauthorized: false,
          },
        } as TypeOrmModuleAsyncOptions),
    }),
    GlobalJwtModule,
    TwitsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    Logger,
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
