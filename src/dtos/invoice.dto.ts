import {
  IsNumber,
  IsString,
  IsOptional,
  IsDate,
  IsBoolean,
} from 'class-validator';

export class InvoiceDto {
  @IsOptional()
  @IsNumber()
  invid: number;

  @IsOptional()
  @IsNumber()
  invcid: number;

  @IsOptional()
  @IsNumber()
  invjid: number;

  @IsOptional()
  @IsNumber()
  invjrid: number;

  @IsOptional()
  @IsNumber()
  invuid: number;

  @IsOptional()
  @IsDate()
  invdate: Date;

  @IsOptional()
  @IsDate()
  invdatedue: Date;

  @IsOptional()
  @IsDate()
  invsent: Date;

  @IsOptional()
  @IsDate()
  invopen: Date;

  @IsOptional()
  @IsDate()
  invaccept: Date;

  @IsOptional()
  @IsString()
  invstatus: string;

  @IsOptional()
  @IsString()
  invtype: string;

  @IsOptional()
  @IsNumber()
  invtotal: number;

  @IsOptional()
  @IsString()
  invkey: string;

  @IsOptional()
  @IsString()
  invreason: string;

  @IsOptional()
  @IsNumber()
  invcommuid: number;

  @IsOptional()
  @IsNumber()
  invcommtot: number;

  @IsOptional()
  @IsDate()
  invcommdts: Date;

  @IsOptional()
  @IsNumber()
  invcommtot2: number;

  @IsOptional()
  @IsDate()
  invcommdts2: Date;

  @IsOptional()
  @IsNumber()
  iqbid: number;

  @IsOptional()
  @IsNumber()
  iqbstat: number;

  @IsOptional()
  @IsString()
  iqbinvoicenum: string;

  @IsOptional()
  @IsString()
  iqbresp: string;

  @IsOptional()
  @IsString()
  iqbitem: string;

  @IsOptional()
  @IsBoolean()
  invnolate: boolean;

  @IsOptional()
  @IsDate()
  invpaidfull: Date;

  @IsOptional()
  @IsNumber()
  invlatefee: number;

  @IsOptional()
  @IsNumber()
  invpaid: number;

  @IsOptional()
  @IsString()
  invpays: string;

  @IsOptional()
  @IsString()
  invpaysid: string;

  @IsOptional()
  @IsString()
  invpaystatus: string;

  @IsOptional()
  @IsBoolean()
  invtm: boolean;
}
