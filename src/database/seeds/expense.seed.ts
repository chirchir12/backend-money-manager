import { Connection, getManager } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Expense } from '../../expense/entities/expense.entity';

export class ExpenseSeeder implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<void> {
    await getManager().query('DELETE FROM expense');
    await factory(Expense)().createMany(300);
  }
}
