import { 
    IsDate, 
    IsString, 
    IsEnum, 
    IsOptional, 
    Matches, 
    IsUrl 
  } from 'class-validator';
  import { Type } from 'class-transformer';
  
  export class CreateCarDto {
    
    @IsString()
    CarId: string;
  
    @IsString()
    CarName: string;
  
    @IsString()
    Place: string;
  
    @IsString()
    Color: string;
  
    @Type(() => Date)
    @IsDate({ message: 'A data de fabricação deve ser válida.' })
    DateFabrication: Date;
  
    @IsEnum(['Approved', 'Rejected', 'Analizing'], { message: 'Status inválido.' })
    Status: 'Approved' | 'Rejected' | 'Analizing';
  
    @IsOptional()
    @IsUrl({}, { message: 'A imagem deve ser uma URL válida.' })
    CarImg?: string;
  
    @IsString()
    // @Matches(/\.pdf$/, { message: 'A documentação deve ser um arquivo PDF.' })
    Documentation: string;

  }