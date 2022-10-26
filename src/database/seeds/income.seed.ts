import { Connection, DataSource } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

import { Income } from '../../income/entities/income.entity';

export default class IncomeSeeder implements Seeder {
  async run(factory: Factory, connection: Connection): Promise<void> {
    await factory(Income)().createMany(100);
  }
}
