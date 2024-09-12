import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ user: any; access_token: string }> {
    if (!username || !password) {
      throw new BadRequestException(`empty username or password`);
    }

    const user = await this.usersService.findOne(username);

    if (user?.password !== password) {
      throw new UnauthorizedException();
    }

    const payload = { login: user.email, password: user.password };

    return {
      user: {
        name: user?.name,
        phone: user?.phone,
        email: user?.email,
      },
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
