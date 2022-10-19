import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../../core/entities/categories.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Expense {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.expenses, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  actorId: number;

  @ManyToOne(() => Category, (category) => category.expenses, {
    onDelete: 'NO ACTION',
    onUpdate: 'NO ACTION',
  })
  category: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  amount: number;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ nullable: true })
  comment: string;
}
