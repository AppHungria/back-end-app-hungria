import { Test, TestingModule } from '@nestjs/testing';
import { UserDriverService } from './user-driver.service';

describe('UserDriverService', () => {
  let service: UserDriverService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserDriverService],
    }).compile();

    service = module.get<UserDriverService>(UserDriverService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
