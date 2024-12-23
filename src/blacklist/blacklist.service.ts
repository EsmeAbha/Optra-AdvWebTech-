import { Injectable } from '@nestjs/common';

@Injectable()
export class BlacklistService {
  private tokenBlacklist = new Set<string>();

  addToken(token: string): void {
    this.tokenBlacklist.add(token);
  }

  isTokenBlacklisted(token: string): boolean {
    return this.tokenBlacklist.has(token);
  }
}
