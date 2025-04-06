import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './routes/auth/auth.module';
import { QuestModule } from './routes/quest/quest.module';
import { ScheduleModule } from '@nestjs/schedule';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    // routes
    AuthModule,
    QuestModule,
    // prisma
    PrismaModule,
    // config (env)
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // schedule
    ScheduleModule.forRoot(), // Initialize ScheduleModule
  ],
})
export class AppModule {}
