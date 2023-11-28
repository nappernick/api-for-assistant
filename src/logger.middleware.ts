import { Injectable } from '@nestjs/common';
import { Counter } from 'prom-client';

@Injectable()
export class LoggerMiddleware {
  use(req, res, next) {
    console.log('Request...');
    next();
  }
}

const httpRequestsCounter = new Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method'],
});

// Increment counter
httpRequestsCounter.inc({ method: 'GET' });
