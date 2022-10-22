import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/validation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidateInputPipe({ whitelist: true, transform: true }),
  ); // strip out properties that are not needed

  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
