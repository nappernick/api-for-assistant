import { Controller, Get, Param } from '@nestjs/common';
import { LeadsService } from '../services/leads.service';
import { Lead } from '../entities/lead.entity';

@Controller('leads')
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Get(':luid')
  async getLeadsByUserId(@Param('luid') luid: number): Promise<Lead[]> {
    return await this.leadsService.getLeadsByUserId(luid);
  }

  // Add endpoints for create, update, delete, and find by id
}
