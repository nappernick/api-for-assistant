import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoiceController } from '../controllers/invoices.controller';
import { Invoice } from '../entities/invoice.entity';
import { InvoicesService } from '../services/invoices.service';

@Module({
  imports: [TypeOrmModule.forFeature([Invoice])],
  providers: [InvoicesService],
  controllers: [InvoiceController],
})
export class InvoicesModule {}
