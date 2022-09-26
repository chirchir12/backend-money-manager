import fs = require('fs');
import * as dotenv from 'dotenv';
import databaseConfig from '../config/database.config';

dotenv.config();
console.log(process.env.NODE_ENV);
fs.writeFileSync(
  'ormconfig.json',
  JSON.stringify(databaseConfig(process.env.NODE_ENV || 'dev'), null, 2),
);
