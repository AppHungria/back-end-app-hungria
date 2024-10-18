import { 
    IsString, 
    IsEmail, 
    IsNumber, 
    MinLength, 
    MaxLength, 
    Matches, 
    IsEnum,  
  } from 'class-validator';
  
  export class CreateDriverDto {
    
    @IsString()
    DriverId: string;
  
    @IsString()
    DriverName: string;
  
    @IsEmail({}, { message: 'O endereço de e-mail deve ser válido.' })
    EmailAddress: string;
  
    @IsString()
    @MinLength(8, { message: 'A senha deve ter no mínimo 8 caracteres.' })
    @MaxLength(16, { message: 'A senha deve ter no máximo 16 caracteres.' })
    @Matches(/(?=.*[a-z])/, {
      message: 'A senha deve conter pelo menos uma letra minúscula.',
    })
    @Matches(/(?=.*[A-Z])/, {
      message: 'A senha deve conter pelo menos uma letra maiúscula.',
    })
    @Matches(/(?=.*\d)/, {
      message: 'A senha deve conter pelo menos um número.',
    })
    @Matches(/(?=.*[@$!%*?&])/, {
      message: 'A senha deve conter pelo menos um caractere especial (@, $, !, %, *, ?, &).',
    })
    Password: string;
  
    @IsString()
    CarId: string;
  
    @IsNumber({}, { message: 'O número de telefone deve ser válido.' })
    PhoneNumber: number;
  
    @IsNumber({}, { message: 'O saldo deve ser um número.' })
    Saldo: number;
  
    @IsEnum(['Aproved', 'Rejected', 'Analizing'], { message: 'Status da conta inválido.' })
    StatusAccount: 'Aproved' | 'Rejected' | 'Analizing';
  
    @IsEnum(['Online', 'Offline', 'InRace'], { message: 'Status de trabalho inválido.' })
    StatusWorking: 'Online' | 'Offline' | 'InRace';
  
    @IsNumber({}, { message: 'Corridas canceladas deve ser um número.' })
    RacesCanceleds: number;
  
    @IsNumber({}, { message: 'Corridas completadas deve ser um número.' })
    RacesCompleteds: number;
  
    @IsString()
    LastConnectedDevice: string;
  
    @Matches(/\.pdf$/, { message: 'A CNH deve ser um arquivo PDF.' })
    Cnh: string; // Caminho ou nome do PDF
  }
  