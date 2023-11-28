// metrics.js
const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;

// Start collection of default metrics (like CPU usage, event loop lag, etc.)
collectDefaultMetrics();

// Custom metrics example
const httpRequestsCounter = new client.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method'],
});

module.exports = {
  httpRequestsCounter,
  // Export other metrics you define
};


// ! DEFINE METRICS
const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests in seconds',
  labelNames: ['method', 'route', 'status_code'],
  buckets: [0.1, 0.3, 1.2, 5] // Define your buckets
});

