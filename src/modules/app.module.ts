import { Module } from '@nestjs/common';
import { LeadsModule } from './leads.module';
import { InvoicesModule } from './invoices.module';
import { MetricsModule } from './metrics.module';
import { AppController } from '../app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [LeadsModule, InvoicesModule, MetricsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
