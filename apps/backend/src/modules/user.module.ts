import { Module } from '@nestjs/common';
import { UserService } from '@/use-cases/user';

@Module({
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
