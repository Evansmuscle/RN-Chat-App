import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigurationService } from './configuration/configuration.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const config = app.get<ConfigurationService>(ConfigurationService.name);

  await app.listen(3000);
}
bootstrap();
