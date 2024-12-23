import { Injectable } from '@nestjs/common';

@Injectable()
export class TempSignupDataService {
  private tempDataStore: Record<string, any> = {};

  set(email: string, data: any): void {
    this.tempDataStore[email] = data;
  }

  get(email: string): any {
    return this.tempDataStore[email];
  }

  delete(email: string): void {
    delete this.tempDataStore[email];
  }
}
