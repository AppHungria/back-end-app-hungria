import { 
  IsString, 
  IsEmail, 
  IsNumber, 
  MinLength, 
  MaxLength, 
  Matches, 
  IsEnum, 
  IsOptional, 
  IsUrl, 
  IsInt
} from 'class-validator';

export class CreateUserPassengerDto {
  
  @IsString()
  Name: string;

  @IsEmail({}, { message: 'O endereço de e-mail deve ser válido.' })
  EmailAdress: string;

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
  PhoneNumber: string;

  @IsEnum(['Aproved', 'Rejected', 'Analizing'], { message: 'Status da conta inválido.' })
  StatusAccount: 'Aproved' | 'Rejected' | 'Analizing';

  @IsInt()
  RacesCanceleds: number;

  @IsInt()
  RacesCompleteds: number;

  @IsString()
  LastConnectedDevice: string;

  @IsString()
  // @Matches(/\.(pdf|jpg|jpeg|png)$/i, { 
  //   message: 'A documentação deve ser um PDF ou uma imagem (JPG, JPEG, PNG).' 
  // })
  Documentation: string;

  @IsOptional()
  @IsString()
  UserImg?: string;
}
