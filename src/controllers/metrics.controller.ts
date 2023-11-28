import { Controller, Get } from '@nestjs/common';
import { register } from 'prom-client';

@Controller()
export class MetricsController {
  constructor() {}

  // * Implements gathering of metrics by Prometheus
  @Get('/metrics')
  getMetrics() {
    return register.metrics();
  }
}
