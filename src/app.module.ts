import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AModule } from './a/a.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { BlacklistService } from './blacklist/blacklist.service';
import { SignupController } from './signup/signup.controller';
import { SignupService } from './signup/signup.service';
import { SignupModule } from './signup/signup.module';
import { TempSignupDataService } from './signup/temp-signup-data.service';

@Module({
  imports: [AModule, AuthModule, DatabaseModule, SignupModule],
  controllers: [AppController, SignupController],
  providers: [AppService, BlacklistService, SignupService, TempSignupDataService],
})
export class AppModule {}
