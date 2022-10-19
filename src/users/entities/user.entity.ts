import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Expense } from '../../expense/entities/expense.entity';
import { Income } from '../../income/entities/income.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isArchived: boolean;

  @Column({ unique: true })
  username: string;

  @Column()
  firstname: string;

  @Column()
  lastname: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true, unique: true, length: 13 })
  phone: string;

  @Column({ nullable: true })
  salt: string;

  @Column()
  hash: string; // passpword

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ type: 'varchar', length: 300, nullable: true })
  createdBy: string;

  @OneToMany(() => Income, (income) => income.actorId, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  incomes: Income[];

  @OneToMany(() => Expense, (expense) => expense.actorId, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  expenses: Expense[];
}
