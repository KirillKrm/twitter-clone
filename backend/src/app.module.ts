import { Logger, Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule, TypeOrmModuleAsyncOptions } from '@nestjs/typeorm'
import { validateSync } from 'class-validator'

import { AppController } from './app.controller'
import { AppService } from './app.service'
import { EnvConfigSchema } from './config/env.config'
import { TwitsModule } from './twits/twits.module'
import { UsersModule } from './users/users.module'
import { AuthModule } from './auth/auth.module'
import { join } from 'path'

@Module({
  imports: [
    ConfigModule.forRoot({
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
    TwitsModule,
    UsersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, Logger],
})
export class AppModule {}
