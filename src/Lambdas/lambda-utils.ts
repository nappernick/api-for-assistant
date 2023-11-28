import { Logger } from '@nestjs/common';

export const logger = new Logger('LambdaHandler');

export function parseIntegerOrThrow(
  paramValue: string,
  paramName: string,
): number {
  const parsedValue = parseInt(paramValue, 10);
  if (isNaN(parsedValue)) {
    throw new Error(`Invalid ${paramName}: ${paramValue}`);
  }
  return parsedValue;
}

export function createErrorResponse(statusCode: number, message: string) {
  return {
    statusCode: statusCode,
    body: JSON.stringify({ message }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS header fixed
    },
  };
}

export function createSuccessResponse(data: any) {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // CORS header fixed
    },
  };
}

export function handleLambdaError(error: Error) {
  logger.error(`Error processing event: ${error.message}`, error.stack);
  return createErrorResponse(500, 'Internal Server Error');
}
