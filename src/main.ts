import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { loadData } from './load-data';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  loadData();
  await app.listen(3000);
}

bootstrap();
