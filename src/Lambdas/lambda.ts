import { NestFactory } from '@nestjs/core';
import { AppModule } from '../modules/app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import * as awsLambdaFastify from 'aws-lambda-fastify';
import { Logger } from '@nestjs/common';

let cachedNestApp: NestFastifyApplication;

async function bootstrap() {
  if (!cachedNestApp) {
    const logger = new Logger('Bootstrap');
    const adapter = new FastifyAdapter();
    const app = await NestFactory.create<NestFastifyApplication>(
      AppModule,
      adapter,
      { logger },
    );

    // Perform any necessary app initialization here (e.g., middleware, filters)

    await app.init();
    cachedNestApp = app.getHttpAdapter().getInstance();
  }
  return cachedNestApp;
}

export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context,
) => {
  const app = await bootstrap().catch((err) => {
    Logger.error(
      'Error during Nest application initialization',
      err.stack,
      'LambdaHandler',
    );
    return null;
  });

  if (!app) {
    return {
      statusCode: 500,
      body: 'Internal Server Error',
    };
  }

  // Make sure to pass the correct context and event to the handler
  return awsLambdaFastify.default(app)(event, context);
};

// Optional: Export bootstrap function for testing purposes
export { bootstrap };
