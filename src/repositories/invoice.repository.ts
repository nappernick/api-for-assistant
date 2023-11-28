import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Invoice } from '../entities/invoice.entity';
import { Repository } from 'typeorm';

@Injectable()
export class InvoiceRepository {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async findByUserId(invuid: number): Promise<Invoice[]> {
    return this.invoiceRepository.find({
      where: { invuid: invuid },
    });
  }
}
