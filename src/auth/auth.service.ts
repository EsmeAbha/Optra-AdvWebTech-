
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Investor } from '../database/database.entity';
import * as bcrypt from 'bcrypt';
import { AuthGuard } from './auth.guard';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Investor) private Irepo: Repository<Investor>,
    private jwtService: JwtService
  ) {}

  async signIn(email: string, password: string,): Promise<{ access_token: string }> {
    const investor = await this.Irepo.findOne({ where: { email } });
    if (!investor) throw new NotFoundException('Invalid email or password');
    const isPasswordValid = bcrypt.compare(password, investor.password);
    if (!isPasswordValid) throw new NotFoundException('Invalid email or password');
    const payload = { email: investor.email, sub: investor.id };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
  async logout(token: string, authGuard: AuthGuard): Promise<void> {
    if (!token) throw new UnauthorizedException('No token provided');
    authGuard.blacklistService.addToken(token);
  }
}