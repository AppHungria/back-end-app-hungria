import { PartialType } from '@nestjs/mapped-types';
import { CreateUserPassengerDto } from './create-user-passenger.dto';

export class UpdateUserPassengerDto extends PartialType(CreateUserPassengerDto) {}
