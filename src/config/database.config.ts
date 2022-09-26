import { DatabaseConfigAttr } from './interfaces/database.interface';
import * as dotenv from 'dotenv';
import { DEVELOPMENT, PRODUCTION, TEST } from './constants.config';

dotenv.config();
export default (env: any): DatabaseConfigAttr => {
  switch (env) {
    case DEVELOPMENT:
      return {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USER || 'switch',
        password: process.env.DB_PASS || 'switch',
        database: process.env.DB_NAME || 'moneymanager',
        synchronize: +process.env.SYNCHRONIZE === 1 ? true : false,
        type: process.env.DIALECT || 'postgres',
        logging: true,
        autoLoadEntities: true,
        entities: ['**/*.entity{.ts, .js}'],
        migrations: ['src/db/migration/*.ts'],
        cli: {
          migrationsDir: 'src/db/migrations',
        },
      };
    case PRODUCTION:
      return {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USER || 'switch',
        password: process.env.DB_PASS || 'switch',
        database: process.env.DB_NAME || 'money-manager-prod',
        synchronize: process.env.NODE_ENV === 'dev' ? true : false,
        type: process.env.DIALECT || 'postgres',
        logging: true,
        autoLoadEntities: true,
        entities: ['**/*.entity{.ts, .js}'],
        migrations: ['dist/src/db/migrations/*.js'],
        cli: {
          migrationsDir: 'src/db/migrations',
        },
      };
    case TEST:
      return {
        host: process.env.DB_HOST || 'localhost',
        port: process.env.DB_PORT || 3306,
        username: process.env.DB_USER || 'switch',
        password: process.env.DB_PASS || 'switch',
        database: process.env.DB_NAME || 'money-manager-test',
        synchronize: process.env.NODE_ENV === 'dev' ? true : false,
        type: process.env.DIALECT || 'postgres',
        logging: true,
        autoLoadEntities: true,
        entities: ['**/*.entity{.ts, .js}'],
        migrations: ['dist/src/db/migrations/*.js'],
        cli: {
          migrationsDir: 'src/db/migrations',
        },
      };
  }
};
