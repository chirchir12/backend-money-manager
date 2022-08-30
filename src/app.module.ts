import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/database/database.module';
import { UsersModule } from './core/users/users.module';
import { AuthModule } from './core/auth/auth.module';
import { LoggingModule } from './core/logging/logging.module';

@Module({
  imports: [DatabaseModule, UsersModule, AuthModule, LoggingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
