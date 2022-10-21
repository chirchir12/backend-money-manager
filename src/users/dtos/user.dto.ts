export class RegisterDto {
  readonly username: string;
  readonly email: string;
  readonly firstname: string;
  readonly lastname: string;
  readonly phone: string;
  readonly password: string;
}

export class LoginDto {
  readonly username: string;
  readonly password: string;
}

export class UserDTO extends RegisterDto {
  readonly hash: string;
  readonly salt?: string;
}
