import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAdminModule } from './user-admin/user-admin.module';
import { ConfigurationsModule } from './configurations/configurations.module';
import { CarModule } from './car/car.module';
import { AvaliationsModule } from './avaliations/avaliations.module';
import { RaceModule } from './race/race.module';
import { UserDriverModule } from './user-driver/user-driver.module';
import { UserPassengerModule } from './user-passenger/user-passenger.module';

@Module({
  imports: [UserPassengerModule, UserDriverModule, RaceModule, AvaliationsModule, CarModule, ConfigurationsModule, UserAdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
