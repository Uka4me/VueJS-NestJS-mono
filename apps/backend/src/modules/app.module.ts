import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from '@/controllers';
import { AppService } from '@/use-cases/app';

import { AuthModule } from '@/modules/auth.module';
import { UserModule } from '@/modules/user.module';
import { LoggerMiddleware } from '@/frameworks/nestjs/middleware';

@Module({
  imports: [AuthModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
