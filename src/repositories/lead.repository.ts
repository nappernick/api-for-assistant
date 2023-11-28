import { Injectable } from '@nestjs/common';
import { Lead } from '../entities/lead.entity';


@Injectable()
export class LeadRepository {
  // Assuming an ORM like TypeORM is used
  async findByUserId(userId: number): Promise<Lead[]> {
    // Replace with actual ORM query
    // @ts-expect-error - will fix
    return userId;
  }
}
