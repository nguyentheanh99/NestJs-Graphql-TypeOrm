import { NestFactory } from '@nestjs/core';
import { AppModule } from '../client/client.module';

export const bootstrap = async () => {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}