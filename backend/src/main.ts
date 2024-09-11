import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app
    .enableVersioning({
      type: VersioningType.URI,
    })
    .setGlobalPrefix('api/v1')
    .useGlobalPipes(new ValidationPipe());

  await app.listen(3000);
}

bootstrap();
