import { Test, TestingModule } from '@nestjs/testing';
import { TwitsController } from './twits.controller';
import { TwitsService } from './twits.service';

describe('TwitsController', () => {
  let controller: TwitsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TwitsController],
      providers: [TwitsService],
    }).compile();

    controller = module.get<TwitsController>(TwitsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
