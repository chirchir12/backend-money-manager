import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { validateDBConfig } from '../validations';
import { Income } from '../../income/entities/income.entity';
import { User } from '../../users/entities/user.entity';
import { Expense } from '../../expense/entities/expense.entity';
import { Category } from '../../shared/categories/entities/category.entity';

dotenv.config();

// validation
const { value: envVars, error } = validateDBConfig
  .prefs({ errors: { label: 'key' } })
  .validate(process.env);

if (error) {
  throw new Error(`config validation ${error.message}`);
}

export const DbConnection: DataSourceOptions = {
  type: envVars.DIALECT,
  database: envVars.DB_NAME,
  username: envVars.DB_USER,
  password: envVars.DB_PASS,
  host: envVars.DB_HOST,
  port: envVars.DB_PORT,
  entities: [Income, User, Expense, Category],
  migrations: ['dist/database/migrations/*.js'],
};

// for typeorm migration
export default new DataSource(DbConnection);
