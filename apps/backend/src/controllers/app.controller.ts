import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AppService } from '@/use-cases/app';
import { JwtAuthGuard } from '@/services/auth/jwt-auth.guard';
import { IFastifyReply } from '@/core/interfaces';
import { JwtPayload } from '@/core/dtos';

@UseGuards(JwtAuthGuard)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.appService.getHello();
  }

  @Get('profile')
  async getProfile(@Request() req: IFastifyReply): Promise<JwtPayload> {
    return req.user;
  }
}
