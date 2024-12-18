import { Injectable } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository  } from 'typeorm';
import { Companies, Investor ,Transaction,OwnTransaction} from './a.entity';

@Injectable()
export class AService {

  constructor(
    @InjectRepository(Transaction) 
    private TRepo: Repository<Transaction> ,
    @InjectRepository(Investor) 
    private IRepo: Repository<Investor> ,
    @InjectRepository(OwnTransaction) 
    private OTRepo: Repository<OwnTransaction> ,
    @InjectRepository(Companies)
    private CRepo: Repository<Companies>) {}

  //validation
  //signUp validation
    signUpValidation(data){

    }
  //signIn validation
    signInValidation(Data){

    }

//update Personal info
  async updatePersonalInfo(Data) 
  {
    const { id, ...fieldsToUpdate } = Data;
    const personalInfo = await this.IRepo.findOneBy({ id });
    if (!personalInfo) {
        console.log(`User with id ${id} not found.`);
    }
    await this.IRepo.update({ id }, fieldsToUpdate);
    return { message: 'Personal information updated successfully.' };
  }
  //Update company info
  async updateCompanyInfo(Data)
  {
    const { id, ...Companyfieldsupdate } = Data;
    const companyInfo = await this.IRepo.findOneBy({ id });
    if (!companyInfo){
      console.log(`User with id ${id} not found`);
    }
    await this.IRepo.update({id},Companyfieldsupdate);
    return {message: "COmpany information is updated succesfully"}

  }
  //viewCompaniesDetails
  companiesview(Data){
    return this.CRepo.find();
  }

  //database
  signup(Data) {
    return this.IRepo.save(Data);
  }
  //signIn
  async signin(Data) {
    try {
      const { email, password } = Data;
      const investor = await this.IRepo.findOne({ where: { email } });
  
      if (!investor) {
        console.log(`Invalid email or password`);
        return {message: 'Invalid email or password',}
      }
  
      if (investor.password !== password) {
        console.log(`Invalid email or password`);
        return {message: 'Invalid email or password',}
      }
  
      return {
        message: 'Sign-in successful',
        investorId: investor.id,
        f_name: investor.full_name,
      };
    } catch (error) {
      console.log('Sign-in error:', error.message);
    }
  }
  //companies
  companies(Data) {
    return this.CRepo.save(Data);
  }

  viewcompanies() {
    return this.CRepo.find();
  }

  viewCompaniesByName(name){
    return this.CRepo.findBy({name : Like(`%${name}%`)})
  }
  //overall transactions
  addtransactionlist(Data)
  {
    return this.TRepo.save(Data); 
  }

  viewtransaction() {
    return this.TRepo.find();
  }

  viewtransactionbyname(transaction_name){
    return this.TRepo.findBy({transaction_name : Like(`%${transaction_name}%`)})
  }
  //own transaction
  addOwntransaction(Data)
  {
    return this.OTRepo.save(Data); 
  }

  viewAllOwntransaction(Data)
  {
    return this.OTRepo.find();
  }

  //delete account
  delete_id(id)
  {
     return this.IRepo.delete(id)
  }


  
  // dbadd(data){
  //   return this.IRepo.save(data)
  // }
  // dbget()
  // {
  //   return this.IRepo.find()
  // }
  // dbid(id)
  // {
  //   return this.IRepo.findOne({where:(id)})
  // }
  // delid(id)
  // {
  //   return this.IRepo.delete(id)
  // }
}
