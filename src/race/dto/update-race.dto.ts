import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateRaceDto } from './create-race.dto';

export class UpdateRaceDto extends 
    PartialType( 
        OmitType(CreateRaceDto , 
            ["RaceId", "UserId"] as const) ) {}
