import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { LeadsModule } from '../modules/leads.module';
import { LeadsService } from '../services/leads.service';
import {
  createSuccessResponse,
  handleLambdaError,
  parseIntegerOrThrow,
} from './lambda-utils';

let app;
const logger = new Logger('UnifiedLeadsLambdaHandler');

export const handler = async (event) => {
  if (!app) {
    app = await NestFactory.createApplicationContext(LeadsModule);
  }

  const leadsService = app.get(LeadsService);

  try {
    const leadId = parseIntegerOrThrow(event.pathParameters.leadId, 'leadId');
    logger.log(`Received leadId: ${leadId} - Event: ${JSON.stringify(event)}`);
    const leads = await leadsService.getLeadsByLeadId(leadId);

    return createSuccessResponse(leads);
  } catch (error) {
    logger.error(
      `Error in UnifiedLeadsLambdaHandler: ${error.message}`,
      error.stack,
    );
    return handleLambdaError(error);
  }
};
