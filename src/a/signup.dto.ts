import { IsEmail, IsNotEmpty, min, MinLength } from "class-validator";

export class SignUpDto{

    @IsNotEmpty({message : "Full name cannot be empty"})
    full_name:string;

    @IsNotEmpty({message : "Email cannot be empty"})
    @IsEmail({},{message : "Please enter a valid email"})
    email:string;

    @MinLength(8,{message : "Password must contain atleast 8 letters"})
    @IsNotEmpty({message : "Password cannot be empty"})
    password:string;
    
    @MinLength(8, {message : "Confirm Password must contain atleast 8 letters"})
    @IsNotEmpty({message : "Confirm Password cannot be empty"})
    confirm_pass:string;

}

