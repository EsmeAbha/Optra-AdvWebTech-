import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class ForgotPassDto{

        @IsNotEmpty({message : "Email cannot be empty"})
        @IsEmail({},{message : "Please enter a valid email"})
        email:string;
    
        @IsNotEmpty({message : "Password cannot be empty"})
        @MinLength(8, {message : "Confirm Password must contain atleast 8 letters"})
        password:string;

}

export class UpdatePersonalInfoDto{

    @IsNotEmpty({message : "Full name cannot be empty"})
    full_name:string;

    @IsNotEmpty({message : "Address cannot be empty"})
    address:string;

    @IsNotEmpty({message : "Phone number cannot be empty"})
    phone_number:string;

    @IsNotEmpty({message : "Gender cannot be empty"})
    gender:string;

}

export class UpdateCompanyInfoDto{

    company_name:string;

    company_type:string

    launch_date:string;

    @IsNotEmpty({message : "Net worth cannot be empty"})
    net_worth:string;
}

export class AddCompaniesDto{
    @IsNotEmpty({message : "Company name cannot be empty"})
    name:string;

    market:string;

    type:string;

    @IsNotEmpty({message : "Growth cannot be empty"})
    growth:string;

    @IsNotEmpty({message : "Launch Date cannot be empty"})
    laaunch_date:string;

    valuation:string;

    funding:string;

    location:string;
}

export class AddTransactionDto{
    @IsNotEmpty({message : "Company name cannot be empty"})
    transaction_name:string;

    transaction_market:string;

    investors:string;

    @IsNotEmpty({message : "Date cannot be empty"})
    date:string;

    c_valuation:string;

    last_round:string;

    c_funding:string;
    
    com_location:string;
}

export class AddOwnTransactionDto{

    @IsNotEmpty({message : "Transaction name cannot be empty"})
    own_transaction_name: string;

    @IsNotEmpty({message : "Transaction name cannot be empty"})
    transaction_amount: string;
    
    @IsNotEmpty({message : "Transaction name cannot be empty"})
    currency: string;
    
    @IsNotEmpty({message : "Transaction name cannot be empty"})
    t_date:string
    
    @IsNotEmpty({message : "Transaction name cannot be empty"})
    type:string
    
    @IsNotEmpty({message : "Transaction name cannot be empty"})
    method:string
}
