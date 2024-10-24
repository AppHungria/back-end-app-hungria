import { 
    IsString, 
    IsEnum, 
    IsNumber, 
    IsOptional 
  } from 'class-validator';
  
  export enum UserType {
    DRIVER = 'Driver',
    PASSENGER = 'Passenger',
  }
  
  export class CreateAvaliationDto {
    
    @IsString()
    AvaliationId: string;
  
    @IsEnum(UserType, { message: 'O tipo de usuário deve ser "Driver" ou "Passenger".' })
    TypeUser: UserType;
  
    @IsNumber({}, { message: 'A nota deve ser um número.' })
    One: number;
  
    @IsNumber({}, { message: 'A nota deve ser um número.' })
    Two: number;
  
    @IsNumber({}, { message: 'A nota deve ser um número.' })
    Three: number;
  
    @IsNumber({}, { message: 'A nota deve ser um número.' })
    Four: number;
  
    @IsNumber({}, { message: 'A nota deve ser um número.' })
    Five: number;
  
    @IsOptional()
    @IsString()
    Comments?: string;
  }
  