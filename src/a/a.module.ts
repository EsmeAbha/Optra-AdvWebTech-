import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AController } from './a.controller';
import { AService } from './a.service';
import { DataSource } from 'typeorm';
import { Investor } from './a.entity'
import { Companies } from './a.entity';
import { Transaction } from './a.entity';
import { OwnTransaction } from './a.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Investor,Companies,Transaction,OwnTransaction]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'abha',
      database: 'optra',
      entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    })
  ],
  controllers: [AController],
  providers: [AService],
})
export class AModule {}
