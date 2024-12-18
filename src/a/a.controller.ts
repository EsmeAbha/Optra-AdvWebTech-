import { Body, Controller,Post, Get, Param , Delete, UsePipes, ValidationPipe} from '@nestjs/common';
import { get } from 'http';
import { AService } from './a.service';
import { SignUpDto } from './signup.dto';
import { SignInDto } from './signin.dto';
import { AddCompaniesDto, AddOwnTransactionDto, AddTransactionDto, UpdateCompanyInfoDto, UpdatePersonalInfoDto } from './validation.dto';
@Controller('a')
export class AController {
    constructor(private readonly aService: AService)
    {

    }
    @Get()
    getAfunction()
    {
        return "from controller a"
    }
    //validation

    //signup validation
    @Post("/signUp")
    @UsePipes(new ValidationPipe())
    signUpValidation(@Body() Data:SignUpDto)
    {
        const {full_name,email,password,confirm_pass}=Data;
        if(password==confirm_pass)
        {
            return this.aService.signup({full_name : full_name,email : email,password :password});
        }
        
    }
    //signin validation
    @Post("/signIn")
    @UsePipes(new ValidationPipe())
    signInValidation(@Body() Data:SignInDto)
    {
        return this.aService.signin(Data);        
        
    }
    //update personal info
    @Post("/updatePersonalInfo")
    @UsePipes(new ValidationPipe())
    updatePersonalInfo(@Body() Data:UpdatePersonalInfoDto)
    {
        return this.aService.updatePersonalInfo(Data)
    }
     //update company info
    @Post("/updateCompanyInfo")
    @UsePipes(new ValidationPipe())
    updateCompanyInfo(@Body() Data:UpdateCompanyInfoDto)
    {
        return this.aService.updateCompanyInfo(Data)
    }
    //add companies
    @Post("/addCompanies")
    @UsePipes(new ValidationPipe())
    companyValidation(@Body() Data:AddCompaniesDto)
    {
        const {name,market,type,growth,laaunch_date,valuation,funding,location}=Data;
            return this.aService.companies({name:name,market :market, type:type,growth:growth,laaunch_date:laaunch_date,valuation:valuation,funding:funding,location:location});
    }
    //view all companies
    @Get("/viewAllCompanies")
    companiesview()
    {
        return this.aService.viewcompanies()
    }
    //view companies by search
    @Post("/viewCompaniesByNameSearch/:name")
    viewCompaniesByName(@Param('name') name: string) {
        return this.aService.viewCompaniesByName(name);
    }
    //add all transactions
    @Post("/addTransactionsList")
    @UsePipes(new ValidationPipe())
    addtransactionlist(@Body() Data:AddTransactionDto)
    {
            return this.aService.addtransactionlist(Data);
    }
    //view all transactions
     @Get("/viewAllTransaction")
     viewtransaction()
     {
         return this.aService.viewtransaction()
     }
     //view transaction by search
     @Post("/viewTransactionByNameSearch/:transaction_name")
     viewtransactionbyname(@Param('transaction_name') transaction_name: string) {
         return this.aService.viewtransactionbyname(transaction_name);
     }

    //add own transactions
    @Post("/addOwnTransactionsList")
    @UsePipes(new ValidationPipe())
    addOwntransaction(@Body() Data:AddOwnTransactionDto)
    {
            return this.aService.addOwntransaction(Data);
    }

    
    @Get("/viewOwnAllTransaction")
    viewAllOwntransaction(Data)
    {
        return this.aService.viewAllOwntransaction(Data)
    }

    @Delete("/deleteaccount/:id")
    delid(@Param('id') id)
    {
         return this.aService.delete_id(id)
    }




    
    /*@Get("/add")
    AddUser(@Body() data)   {
       return this.aService.add(data)
    }
    @Post("/ShowUser/:name")
    ShowUSer(@Param() name){
        return this.aService.spec(name)
    }

    @Get("/showAll")
    showAll(){
        return this.aService.showAll();
    }*/

    // @Post("/db/add")
    // add(@Body() data){
    //     return this.aService.dbadd(data)
    // }
    // @Get("/db/getAll")
    // dbget()
    // {
    //     return this.aService.dbget() 
    // }
    // @Get("/db/getAll/:id")
    // dbid(@Param('id') id){
    //     return this.aService.dbid(id)
    // }
    // @Delete("/db/delete/:id")
    // delid(@Param('id') id)
    // {
    //     return this.aService.delid(id)
    // }
}
