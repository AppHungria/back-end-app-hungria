import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserAdminModule } from './Modules/user-admin/user-admin.module';
import { ConfigurationsModule } from './Modules/configurations/configurations.module';
import { CarModule } from './Modules/car/car.module';
import { AvaliationsModule } from './Modules/avaliations/avaliations.module';
import { RaceModule } from './Modules/race/race.module';
import { UserDriverModule } from './Modules/user-driver/user-driver.module';
import { UserPassengerModule } from './Modules/user-passenger/user-passenger.module';

@Module({
  imports: [
    UserPassengerModule,
    UserDriverModule,
    RaceModule,
    AvaliationsModule,
    CarModule,
    ConfigurationsModule,
    UserAdminModule 
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
