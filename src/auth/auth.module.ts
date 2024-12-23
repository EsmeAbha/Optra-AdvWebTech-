
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './auth.guard';
import { DatabaseModule } from 'src/database/database.module';
import { BlacklistService } from 'src/blacklist/blacklist.service';
@Module({
  imports: [
    DatabaseModule, 
    JwtModule.register({
      global:true,
      secret: jwtConstants.secret,
      signOptions: {expiresIn: "10m"},
    }),
  ],
  providers: [
    AuthService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard
    }, 
    AuthGuard, BlacklistService,
  ],
  controllers: [AuthController],
  exports: [AuthService]
})
export class AuthModule {}
