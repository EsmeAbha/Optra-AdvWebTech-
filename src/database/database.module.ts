// database/database.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Companies, Investor, OwnTransaction, Transaction } from './database.entity';

@Module({
  imports: [
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
    }),
    TypeOrmModule.forFeature([OwnTransaction, Transaction, Companies, Investor]), 
  ],
  exports: [TypeOrmModule], 
})
export class DatabaseModule {}
