import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LoggingModule } from './logging/logging.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { IncomeModule } from './income/income.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    DatabaseModule,
    UsersModule,
    AuthModule,
    LoggingModule,
    IncomeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
  /*
  short hand for 
    providers: [
      {
        provide: AppService, - token is used to request instance of class by the same name
        useClass: AppService,
      },
    ];
  */
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
