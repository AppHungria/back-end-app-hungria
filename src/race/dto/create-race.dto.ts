import { 
    IsString, 
    IsNumber, 
    IsEnum, 
    IsDate, 
    IsOptional, 
    Min, 
    Max 
  } from 'class-validator';

  import { Type } from 'class-transformer';
  
  export class CreateRaceDto {
    
    @IsString()
    RaceId: string;
  
    @IsString()
    UserId: string;
  
    @IsString()
    DriverId: string;
  
    @IsString()
    Origin: string;
  
    @IsString()
    Destination: string;
  
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'O preço deve ter no máximo duas casas decimais.' })
    @Min(0, { message: 'O preço não pode ser negativo.' })
    Price: number;
  
    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'A distância total deve ter no máximo duas casas decimais.' })
    @Min(0, { message: 'A distância total não pode ser negativa.' })
    TotalDistance: number;
  
    @IsEnum(['Search', 'Completed', 'Canceled'], { message: 'Status inválido. Use "Search", "Completed", "Canceled"' })
    Status: 'Search' | 'Completed' | 'Canceled';
  
    @IsOptional()
    @IsNumber()
    @Min(1, { message: 'A avaliação deve ser no mínimo 1.' })
    @Max(5, { message: 'A avaliação deve ser no máximo 5.' })
    AvaliationDriver?: number;
  
    @IsOptional()
    @IsNumber()
    @Min(1, { message: 'A avaliação deve ser no mínimo 1.' })
    @Max(5, { message: 'A avaliação deve ser no máximo 5.' })
    AvaliationPassenger?: number;
  
    @Type(() => Date)
    @IsDate({ message: 'Data inválida.' })
    Date: Date;
  
    @IsOptional()
    @IsString()
    ComentPassenger?: string;
  }
  