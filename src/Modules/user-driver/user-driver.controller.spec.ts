import { Test, TestingModule } from '@nestjs/testing';
import { UserDriverController } from './user-driver.controller';
import { UserDriverService } from './user-driver.service';

describe('UserDriverController', () => {
  let controller: UserDriverController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserDriverController],
      providers: [UserDriverService],
    }).compile();

    controller = module.get<UserDriverController>(UserDriverController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
