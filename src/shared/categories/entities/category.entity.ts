import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Expense } from '../../../expense/entities/expense.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @OneToMany(() => Expense, (expense) => expense.actorId, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  expenses: Expense[];

  @Column()
  type: string; // for salary, income, reports
}
