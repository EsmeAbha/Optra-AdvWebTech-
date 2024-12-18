import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AController } from './a/a.controller';
import { AService } from './a/a.service';
import { AModule } from './a/a.module';
import { Investor } from './a/a.entity';

@Module({
  imports: [AModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
