import { DatabaseConfigAttr } from './interfaces/database.interface';
import * as dotenv from 'dotenv';

dotenv.config();

export const databaseConfig: DatabaseConfigAttr = {
  host: 'localhost',
  port: 3306,
  username: 'switch',
  password: 'switch',
  database: 'money-manager',
  synchronize: process.env.NODE_ENV === 'dev' ? true : false,
  type: 'postgres',
};
