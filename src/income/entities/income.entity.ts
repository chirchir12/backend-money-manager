import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Income {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.incomes, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  actorId: number; // this is the owner of the income

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  amount: number;

  @Column()
  source: string;

  @Column({ nullable: true })
  comment: string;

  @CreateDateColumn({ type: 'date', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true, default: new Date(), type: 'date' })
  date: Date; // when the income was received
}
