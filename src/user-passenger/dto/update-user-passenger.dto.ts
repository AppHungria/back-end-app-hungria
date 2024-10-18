import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateUserPassengerDto } from './create-user-passenger.dto';

export class UpdateUserPassengerDto extends PartialType(
    OmitType(CreateUserPassengerDto, ['UserId', 'RacesCanceleds', 'RacesCompleteds'] as const),
  ) {}