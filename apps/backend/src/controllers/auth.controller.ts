import { Controller, Get, Post, Body, Request } from '@nestjs/common';
import { AuthLoginDto } from '@/core/dtos';
import { AuthService } from '@/services/auth';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() auth: AuthLoginDto) {
    return this.authService.login(auth);
  }

  /* @Post('logout')
  async logout(@Request() request: any) {
    return this.appService.getHello();
  }

  @Get('is_authenticated')
  async isAuthenticated(@Request() request: any) {
    const user = await this.isAuthUsecaseProxy.getInstance().execute(request.user.username);
    const response = new IsAuthPresenter();
    response.username = user.username;
    return response;
  }

  @Get('refresh')
  async refresh(@Request() request: any) {
    const accessTokenCookie = await this.loginUsecaseProxy.getInstance().getCookieWithJwtToken(request.user.username);
    request.res.setHeader('Set-Cookie', accessTokenCookie);
    return 'Refresh successful';
  } */
}
