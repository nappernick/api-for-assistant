import { Injectable } from '@nestjs/common';
import { InvoiceRepository } from '../repositories/invoice.repository';
import { LeadRepository } from '../repositories/lead.repository';
// import { PhotoStorageService } from './photo-storage.service';
import { InvoiceDto } from '../dtos/invoice.dto';
import { LeadDto } from '../dtos/leads.dto';

@Injectable()
export class AppService {
  constructor(
    private leadRepository: LeadRepository,
    private invoiceRepository: InvoiceRepository,
    // private photoStorageService: PhotoStorageService,
  ) {}

  async getLeadsByUserId(userId: number): Promise<Lead[]> {
    return this.leadRepository.findByUserId(userId);
  }

  async getInvoicesByUserId(userId: number): Promise<Invoice[]> {
    return this.invoiceRepository.findByUserId(userId);
  }

  getHello() {
    const hello = 'Hello World!';
    console.log(hello);
    return hello;
  }

  // ! Need to define this once shape is known
  // async postPhoto(file: any): Promise<any> {
  //   return this.photoStorageService.storePhoto(file);
  // }
}
