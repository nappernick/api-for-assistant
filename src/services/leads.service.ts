import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Lead } from '../entities/lead.entity';

@Injectable()
export class LeadsService {
  constructor(
    @InjectRepository(Lead)
    private leadRepository: Repository<Lead>,
  ) {}

  async getLeadsByUserId(luid: number): Promise<Lead[]> {
    const leads = await this.leadRepository.find({ where: { luid } });
    return leads;
  }

  // ... other methods
}
