import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CustomConfigService } from '@src/configuration/configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<CustomConfigService>(CustomConfigService);

  await app.listen(config.port);
}
bootstrap();
