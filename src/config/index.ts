import * as dotenv from 'dotenv';
import databaseConfig from './database.config';

dotenv.config();

export default () => ({
  databaseConfig: databaseConfig(process.env.NODE_ENV || 'dev'),
});
