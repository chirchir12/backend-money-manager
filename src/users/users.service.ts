import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDTO } from './dtos';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  findAll() {
    console.log(this.configService.get('databaseConfig'));
    return 'this is all';
  }
  async create(user: UserDTO): Promise<User> {
    return this.userRepository.create(user);
  }

  async findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async findByEmailOrUsername(value: string): Promise<User> {
    return this.userRepository.findOne({
      where: [{ email: value }, { username: value }],
    });
  }
}
