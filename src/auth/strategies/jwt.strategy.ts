import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../../users/users.service';

@Injectable()
export class JWTStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userService: UsersService,
    confiService: ConfigService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: confiService.get('authConfig').secretKey,
    });
  }

  async validate(payload: any) {
    // check if token actually exist
    const user = await this.userService.findById(payload.id);
    if (!user) {
      throw new UnauthorizedException(
        'you are not authorized to perform this operation',
      );
    }
    return payload;
  }
}
