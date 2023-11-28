import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Invoice extends BaseEntity {
  @PrimaryGeneratedColumn()
  invid: number;

  @Column({ type: 'int', nullable: true })
  invcid: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  invjid: number;

  @Column({ type: 'int', nullable: true })
  invjrid: number;

  @Column({ type: 'int', nullable: false })
  invuid: number;

  @Column({ type: 'date', nullable: true })
  invdate: Date;

  @Column({ type: 'date', nullable: true })
  invdatedue: Date;

  @Column({ type: 'date', nullable: true })
  invsent: Date;

  @Column({ type: 'date', nullable: true })
  invopen: Date;

  @Column({ type: 'date', nullable: true })
  invaccept: Date;

  @Column({ type: 'varchar', length: 24, nullable: true })
  invstatus: string;

  @Column({ type: 'varchar', length: 12, nullable: true })
  invtype: string;

  @Column({ type: 'double', precision: 10, scale: 2, nullable: true })
  invtotal: number;

  @Column({ type: 'varchar', length: 128, nullable: true })
  invkey: string;

  @Column({ type: 'text', nullable: true })
  invreason: string;

  @Column({ type: 'int', nullable: true })
  invcommuid: number;

  @Column({ type: 'double', precision: 6, scale: 2, nullable: true })
  invcommtot: number;

  @Column({ type: 'date', nullable: true })
  invcommdts: Date;

  @Column({ type: 'double', precision: 6, scale: 2, nullable: true })
  invcommtot2: number;

  @Column({ type: 'date', nullable: true })
  invcommdts2: Date;

  @Column({ type: 'int', nullable: true })
  iqbid: number;

  @Column({ type: 'int', nullable: true, default: 0 })
  iqbstat: number;

  @Column({ type: 'varchar', length: 21, nullable: true })
  iqbinvoicenum: string;

  @Column({ type: 'text', nullable: true })
  iqbresp: string;

  @Column({ type: 'varchar', length: 144, nullable: true })
  iqbitem: string;

  @Column({ type: 'tinyint', nullable: true })
  invnolate: boolean;

  @Column({ type: 'date', nullable: true })
  invpaidfull: Date;

  @Column({
    type: 'double',
    precision: 6,
    scale: 2,
    nullable: true,
    default: 0,
  })
  invlatefee: number;

  @Column({
    type: 'double',
    precision: 8,
    scale: 2,
    nullable: true,
    default: 0,
  })
  invpaid: number;

  @Column({ type: 'varchar', length: 3, nullable: true })
  invpays: string;

  @Column({ type: 'varchar', length: 4, nullable: true })
  invpaysid: string;

  @Column({ type: 'varchar', length: 24, nullable: true })
  invpaystatus: string;

  @Column({ type: 'tinyint', nullable: true, default: 0 })
  invtm: boolean;
}
