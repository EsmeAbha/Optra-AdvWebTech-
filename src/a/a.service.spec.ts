import { Test, TestingModule } from '@nestjs/testing';
import { AService } from './a.service';

describe('AService', () => {
  let service: AService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AService],
    }).compile();

    service = module.get<AService>(AService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
