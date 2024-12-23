import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SignupService } from './signup.service';
import { SignupController } from './signup.controller';
import { TempSignupDataService } from './temp-signup-data.service';
import { Investor } from 'src/database/database.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Investor])],
  controllers: [SignupController],
  providers: [SignupService, TempSignupDataService],
})
export class SignupModule {}
