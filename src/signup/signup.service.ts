import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as nodemailer from 'nodemailer';
import { Investor } from 'src/database/database.entity';
import { TempSignupDataService } from './temp-signup-data.service';

@Injectable()
export class SignupService {
  private transporter: nodemailer.Transporter;

  constructor(
    @InjectRepository(Investor)
    private IRepo: Repository<Investor>,
    private readonly tempSignupDataService: TempSignupDataService,
  ) {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: "esmechowdhuryabha@gmail.com",
        pass: "gkxu vsuw nfok coqu",
      },
    });
  }

  async initiateSignUp(name: string, email: string, password: string) {
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); 

    this.tempSignupDataService.set(email, { name, email, password, otp });

    const mailOptions = {
      from: "esmechowdhuryabha@gmail.com",
      to: email,
      subject: 'Your OTP Code',
      text: `Hello ${name},\n\nYour OTP is ${otp}. Please use this to complete your registration.\n\nThank you!`,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      return { message: 'OTP sent successfully to email' };
    } catch (error) {
      console.error(error);
      throw new Error('Failed to send OTP');
    }
  }

  async verifyOtp(email: string, otp: string) {
    const tempData = this.tempSignupDataService.get(email);

    if (!tempData) {
      throw new Error('No sign-up initiated for this email');
    }

    if (tempData.otp !== otp) {
      throw new Error('Invalid OTP');
    }

    // OTP verify

    await this.IRepo.save({
      full_name: tempData.name,
      email: tempData.email,
      password: tempData.password,
    });

    this.tempSignupDataService.delete(email); 
    return { message: 'Sign-up successful', user: { name: tempData.name, email: tempData.email } };
  }
}
