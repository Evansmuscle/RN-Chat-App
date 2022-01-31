import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CustomConfigService {
  constructor(private readonly configService: ConfigService) {}

  public get port(): number {
    return this.configService.get<number>('PORT');
  }
}
