import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AController } from './a.controller';
import { AService } from './a.service';

import { AuthModule } from 'src/auth/auth.module';
import { Companies, Investor, OwnTransaction, Transaction } from 'src/database/database.entity';



@Module({
  imports: [ TypeOrmModule.forFeature([Companies, Investor, Transaction, OwnTransaction ])  ],
  controllers: [AController],
  providers: [AService],
})
export class AModule {}
