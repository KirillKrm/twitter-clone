import { NestFactory } from '@nestjs/core'
import { Logger, ValidationPipe, VersioningType } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: ['log', 'error', 'warn', 'debug'],
  })

  app.setGlobalPrefix('api')
  app.enableVersioning({
    type: VersioningType.URI,
  })
  app.useGlobalPipes(new ValidationPipe())

  const documentation = SwaggerModule.createDocument(
    app,
    new DocumentBuilder()
      .setTitle('Twitter-clone')
      .setDescription('The twitter-clone API documentation')
      .setVersion('0.1')
      .build(),
  )
  SwaggerModule.setup('docs', app, documentation)

  const configService = app.get(ConfigService)
  const port = configService.get('PORT')
  await app.listen(port)

  const loggerService = app.get(Logger)
  loggerService.log(`Port: ${port}`)
  loggerService.log(`NOVE_ENV: ${configService.get('NODE_ENV')}`)
}
bootstrap()
