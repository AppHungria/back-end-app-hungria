import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDriverDto } from './create-user-driver.dto';

export class UpdateUserDriverDto extends PartialType(CreateUserDriverDto) {}
