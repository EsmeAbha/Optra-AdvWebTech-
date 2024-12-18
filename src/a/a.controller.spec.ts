import { Test, TestingModule } from '@nestjs/testing';
import { AController } from './a.controller';

describe('AController', () => {
  let controller: AController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AController],
    }).compile();

    controller = module.get<AController>(AController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
