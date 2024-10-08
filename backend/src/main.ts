import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  app
    .enableVersioning({
      type: VersioningType.URI,
    })
    .setGlobalPrefix('api/v1')
    .useGlobalPipes(new ValidationPipe());

  await app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}

bootstrap();
