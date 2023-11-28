import { Controller, Get } from '@nestjs/common';
import { AppService } from './services/app.service';
import { register } from 'prom-client';

@Controller('metrics')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('metrics')
  getMetrics() {
    return register.metrics();
  }
}
