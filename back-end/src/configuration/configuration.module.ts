import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CustomConfigService } from './configuration.service';

import * as Joi from 'joi';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
      }),
      isGlobal: true,
    }),
  ],
  providers: [CustomConfigService, ConfigService],
  exports: [CustomConfigService, ConfigService],
})
export class CustomConfigModule {}
