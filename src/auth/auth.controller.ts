import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { RegisterDto } from '../users/dtos';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local')) // delegate login to the passport module
  @Post('login')
  async login(@Request() req) {
    return await this.authService.login(req.user);
  }

  @Post('signup')
  async signup(@Body() user: RegisterDto) {
    return await this.authService.create(user);
  }
}
