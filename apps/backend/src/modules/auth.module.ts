import { Module } from '@nestjs/common';
import { AuthService } from '@/services/auth';
// import { LocalStrategy } from './local.strategy';
import { JwtStrategy } from '@/services/auth/jwt.strategy';
import { UserModule } from './user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from '@/controllers';
// import { jwtConstants } from './constants';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: '12312321', // jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy /* , LocalStrategy */],
  exports: [AuthService /* , JwtModule */],
})
export class AuthModule {}
