import { Test, TestingModule } from '@nestjs/testing';
import { serviceEscritor } from './service/escritor.service';

describe('escritorService', () => {
  let service: serviceEscritor;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [serviceEscritor],
    }).compile();

    service = module.get<serviceEscritor>(serviceEscritor);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
