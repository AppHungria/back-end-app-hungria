import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserDriverDto } from './create-user-driver.dto';

export class UpdateUserDriverDto extends 
PartialType( 
    OmitType(CreateUserDriverDto, 
        [ 
            "DriverId", 
            "CarId", 
            "Saldo", 
            "StatusAccount", 
            "RacesCanceleds", 
            "RacesCompleteds"
            
        ] as const )) {}
