import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto, UserDTO } from '../users/dtos';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, password: string) {
    const user = await this.userService.findByEmailOrUsername(username);
    if (!user) {
      return null;
    }
    const match = await this.comparePassword(password, user.hash);
    if (!match) {
      return null;
    }
    // delete properties you don't need
    delete user.hash;
    delete user.salt;

    return user;
  }

  private async comparePassword(
    enteredPassword: string,
    dbPasspword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(enteredPassword, dbPasspword);
  }

  public async login(user: any) {
    console.log(user);
    const token = await this.generateToken({ ...user });
    return {
      user,
      token,
    };
  }

  public async create(user: RegisterDto) {
    const pass = await this.hashPassword(user.password);

    const newUser = await this.userService.create({ ...user, hash: pass });

    const token = await this.generateToken({ ...newUser, password: pass });

    return {
      user: newUser,
      token,
    };
  }

  private async hashPassword(password: string) {
    return await bcrypt.hash(password, 10);
  }

  private async generateToken(user: any) {
    return this.jwtService.signAsync(user);
  }
}
