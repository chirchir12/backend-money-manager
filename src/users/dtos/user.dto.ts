import { IsEmail, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()
  readonly username: string;

  @IsEmail()
  readonly email: string;

  @IsNotEmpty()
  readonly firstname: string;

  @IsNotEmpty()
  readonly lastname: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  readonly password: string;
}

export class LoginDto {
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  readonly password: string;
}

export class UserDTO extends RegisterDto {
  readonly hash: string;
  readonly salt?: string;
}
