import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { InvoicesModule } from '../modules/invoices.module';
import { InvoicesService } from '../services/invoices.service';
import { LeadsModule } from '../modules/leads.module';
import { LeadsService } from '../services/leads.service';
import {
  createSuccessResponse,
  handleLambdaError,
  parseIntegerOrThrow,
} from './lambda-utils';

let invoiceApp;
let leadsApp;
const logger = new Logger('UnifiedLambdaHandler');

export const handler = async (event, context) => {
  const isInvoiceRequest = context.functionName.includes('invoice');
  // Initialize the respective NestJS application context based on the function name
  if (isInvoiceRequest && !invoiceApp) {
    invoiceApp = await NestFactory.createApplicationContext(InvoicesModule);
  } else if (!isInvoiceRequest && !leadsApp) {
    leadsApp = await NestFactory.createApplicationContext(LeadsModule);
  }

  const service = isInvoiceRequest
    ? invoiceApp.get(InvoicesService)
    : leadsApp.get(LeadsService);

  // Extract the respective ID from the event pathParameters
  const idKey = isInvoiceRequest ? 'userId' : 'leadId';
  const id = event.pathParameters[idKey];

  try {
    const entityId = parseIntegerOrThrow(id, idKey);

    logger.log(
      `Received ${idKey}: ${entityId} - Event: ${JSON.stringify(event)}`,
    );

    // Retrieve data based on the type of request
    const results = isInvoiceRequest
      ? await service.getInvoicesByUserId(entityId)
      : await service.getLeadsByLeadId(entityId);

    return createSuccessResponse(results);
  } catch (error) {
    return handleLambdaError(error);
  }
};
