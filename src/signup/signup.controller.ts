import { Body, Controller, Post, BadRequestException } from '@nestjs/common';
import { SignupService } from './signup.service';
import { Public } from 'src/auth/public.decorator';

@Controller('auth')
export class SignupController {
  constructor(private readonly signupService: SignupService) {}

  @Post('signup')
  @Public()
  async signUp(@Body() body: { full_name: string; email: string; password: string; confirm_pass: string }) {
    const { full_name, email, password, confirm_pass } = body;
    if (!full_name || !email ) {
      throw new BadRequestException('Name and email are required');
    }
    if(password!=confirm_pass){
        throw new BadRequestException('Password Confirmation error');
    }
    return this.signupService.initiateSignUp(full_name, email, password);
  }

  @Post('verify-otp')
  @Public()
  async verifyOtp(@Body() body) {
    const { email, otp } = body;
    if (!email || !otp) {
      throw new BadRequestException('Email and OTP are required');
    }
    return this.signupService.verifyOtp(email, otp);
  }
}
