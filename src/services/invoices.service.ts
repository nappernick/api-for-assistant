import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Invoice } from '../entities/invoice.entity'; // Assuming you have an InvoiceDto

@Injectable({})
export class InvoicesService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepository: Repository<Invoice>,
  ) {}

  async getInvoicesByUserId(invuid: number) {
    return this.invoiceRepository.find({ where: { invuid } });
  }
}
