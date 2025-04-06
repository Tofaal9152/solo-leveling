import { Injectable } from '@nestjs/common';
import * as argon from 'argon2';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthUtils {
  constructor(
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async hashData(data: string): Promise<string> {
    return await argon.hash(data);
  }

  async verifyData(data: string, hash: string): Promise<boolean> {
    return await argon.verify(hash, data);
  }

  async generateTokens(userId: string, email: string) {
    const payload = { id: userId, email };

    const [access_token, refresh_token] = await Promise.all([
      this.jwt.signAsync(payload, {
        expiresIn: '7d',
        secret: this.config.get<string>('AT_SECRET'),
      }),
      this.jwt.signAsync(payload, {
        expiresIn: '7d',
        secret: this.config.get<string>('RT_SECRET'),
      }),
    ]);

    return { access_token, refresh_token };
  }
}
