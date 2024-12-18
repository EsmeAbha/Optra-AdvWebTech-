import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class ForgotPassDto{

        @IsNotEmpty({message : "Email cannot be empty"})
        @IsEmail({},{message : "Please enter a valid email"})
        email:string;
    
        @IsNotEmpty({message : "Password cannot be empty"})
        @MinLength(8, {message : "Confirm Password must contain atleast 8 letters"})
        password:string;

}