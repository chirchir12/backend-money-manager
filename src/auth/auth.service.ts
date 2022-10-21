import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService) {}
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
}
