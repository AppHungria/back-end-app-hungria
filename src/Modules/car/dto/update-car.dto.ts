import { OmitType, PartialType } from '@nestjs/mapped-types';
import { CreateCarDto } from './create-car.dto';

export class UpdateCarDto extends PartialType( OmitType(CreateCarDto, ["CarId"] as const)) {}
