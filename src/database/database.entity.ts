import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { IsEmail } from 'class-validator';
@Entity()
@Unique('unique_email', ['email']) 

export class Investor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  full_name: string;

  @Column({ length: 500 })
  email: string;

  @Column({ length: 8 })
  password: string;

  @Column({length:100 , nullable : true})
  company_name:string

  @Column({length:15 ,nullable : true})
  phone_number:string

  @Column({length:100, nullable : true })
  address:string

  @Column({length:20, nullable : true})
  gender:string

  @Column({length:50, nullable : true})
  launch_date:string

  @Column({length:100, nullable : true})
  net_worth:string

  @Column({length:100, nullable : true})
  company_type:string
  

}

@Entity()
export class Companies {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  name: string;

  @Column({ length: 500 })
  market: string;

  @Column({ length: 300 })
  type: string;

  @Column({length:100 , nullable : true})
  growth:string

  @Column({length:60 })
  laaunch_date:string

  @Column({length:200, nullable : true })
  valuation:string

  @Column({length:200, nullable : true})
  funding:string

  @Column({length:100, nullable : true})
  location:string

}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  transaction_name: string;

  @Column({ length: 500 })
  transaction_market: string;

  @Column({ length: 300 })
  investors: string;

  @Column({length:100 , nullable : true})
  date:string

  @Column({length:200, nullable : true })
  c_valuation:string

  @Column({length:200, nullable : true})
  last_round:string

  @Column({length:100, nullable : true})
  com_location:string

}

@Entity()
export class OwnTransaction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  own_transaction_name: string;

  @Column({ length: 500 })
  transaction_amount: string;

  @Column({ length: 300 })
  currency: string;

  @Column({length:100 , nullable : true})
  t_date:string

  @Column({length:200, nullable : true })
  type:string

  @Column({length:200, nullable : true})
  method:string

}