import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '@/use-cases/user';
import { JwtService } from '@nestjs/jwt';
import { User } from '@/core/entities';
import { AuthLoginDto, JwtPayload } from '@/core/dtos';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(authDto: AuthLoginDto) {
    const user = await this.validateUser(authDto);
    return this.generateToken(user);
  }

  async validateUser(userDto: AuthLoginDto): Promise<any> {
    const user = await this.userService.findByEmail(userDto.email);
    if (user && user.password === userDto.password) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException({
      message: 'Некорректный емайл или пароль',
    });
  }

  private async generateToken(user: User) {
    const payload: JwtPayload = { email: user.email, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
