import { NestFactory } from '@nestjs/core'
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import cookieParser from 'cookie-parser'
import helmet from 'helmet'
import csurf from 'tiny-csrf'

import { logger } from './logger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger,
  })
  const configService = app.get(ConfigService)

  app.useGlobalPipes(new ValidationPipe({ transform: true }))
  app.enableVersioning({
    type: VersioningType.URI,
  })

  const documentation = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Twitter-clone')
      .setDescription('The twitter-clone API documentation')
      .setVersion('0.1')
      .addBearerAuth()
      .build(),
  )
  SwaggerModule.setup('docs', app, documentation)

  app.use(helmet())
  app.use(cookieParser())
  // TODO add domain for frontend on deploy
  // app.enableCors()
  // TODO
  // app.use(csurf(configService.get('GENERAL_SECRET')))

  const port = configService.get('PORT')
  await app.listen(port)

  const loggerService = app.get(Logger)
  loggerService.log(`Port: ${port}`)
  loggerService.log(`NODE_ENV: ${configService.get('NODE_ENV')}`)
}
bootstrap()
