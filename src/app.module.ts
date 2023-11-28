import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvoicesModule } from './modules/invoices.module';
import { LeadsModule } from './modules/leads.module';
import ormconfig from './database/ormconfig';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    InvoicesModule,
    LeadsModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '../.env',
    }),
  ],
})
export class AppModule {}
