import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtAccessStrategy, JwtRefreshStrategy } from '../../common/strategy';
import { AuthUtils } from 'src/common/utils/auth.util';

@Module({
  imports: [JwtModule.register({})],
  controllers: [AuthController],
  providers: [AuthService, JwtAccessStrategy, JwtRefreshStrategy, AuthUtils],
})
export class AuthModule {}
