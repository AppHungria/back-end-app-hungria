import { Module } from '@nestjs/common';
import { UserDriverService } from './user-driver.service';
import { UserDriverController } from './user-driver.controller';

@Module({
  controllers: [UserDriverController],
  providers: [UserDriverService],
})
export class UserDriverModule {}
