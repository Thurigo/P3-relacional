import { Test, TestingModule } from '@nestjs/testing';
import { ControllerEscritor } from './controller/escritor.controller';
import { escritorService } from './service/escritor.service';

describe('ControllerEscritor', () => {
  let controller: ControllerEscritor;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControllerEscritor],
      providers: [escritorService],
    }).compile();

    controller = module.get<ControllerEscritor>(ControllerEscritor);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
