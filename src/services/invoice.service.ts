// invoice.service.ts
import { Injectable } from '@nestjs/common';
import { InvoiceDto } from '../dtos/invoice.dto'; // Adjust the path as necessary
import { InvoiceRepository } from '../repositories/invoice.repository'; // Adjust the path as necessary

@Injectable()
export class InvoiceService {
  constructor(private invoiceRepository: InvoiceRepository) {}

  async createInvoice(invoiceDto: InvoiceDto): Promise<InvoiceDto> {
    // Add logic to handle invoice creation
    // @ts-expect-error - not yet fleshed out.
    return this.invoiceRepository.create(invoiceDto);
  }

  async getInvoices(): Promise<InvoiceDto[]> {
    // Add logic to retrieve invoices
    // @ts-expect-error - not yet fleshed out.
    return this.invoiceRepository.findAll();
  }

  // Add other necessary methods (update, delete, etc.)
}
