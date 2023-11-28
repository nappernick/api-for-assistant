import { Controller, Get, Param } from '@nestjs/common';
import { InvoicesService } from '../services/invoices.service';
import { Invoice } from '../entities/invoice.entity';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoicesService) {}

  @Get(':invuid')
  getInvoicesByUserId(@Param('invuid') invuid: number): Promise<Invoice[]> {
    return this.invoiceService.getInvoicesByUserId(invuid);
  }

  @Get(':invuid')
  async findByUserId(@Param('invuid') invuid: number) {
    return this.invoiceService.getInvoicesByUserId(invuid);
  }
}
