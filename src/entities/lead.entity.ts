import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';

@Entity()
export class Lead extends BaseEntity {
  @PrimaryGeneratedColumn()
  lid: number;

  @Column({ nullable: true })
  luid: number;

  @Column({ nullable: true })
  lcid: number;

  // Continue for each field in your interface
  @Column({ type: 'date', nullable: true })
  ladate: Date;

  @Column({ nullable: true })
  lstatus: string;

  // ... and so on for each property in your lead interface
}
