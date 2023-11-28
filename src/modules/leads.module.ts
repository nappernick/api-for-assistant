import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LeadsService } from '../services/leads.service';
import { LeadsController } from '../controllers/leads.controller';
import { Lead } from '../entities/lead.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Lead])],
  providers: [LeadsService],
  controllers: [LeadsController],
})
export class LeadsModule {}
