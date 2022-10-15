import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(private readonly configService: ConfigService) {}
  findAll() {
    console.log(this.configService.get('databaseConfig'));
    return 'this is all';
  }
}
