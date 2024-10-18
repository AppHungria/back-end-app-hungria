import { 
  IsString, 
  IsEmail, 
  IsNumber, 
  MinLength, 
  MaxLength, 
  Matches, 
  IsEnum, 
  IsOptional, 
  IsUrl 
} from 'class-validator';

export class CreateUserDto {
  
  @IsString()
  userId: string;

  @IsString()
  name: string;

  @IsEmail({}, { message: 'O endereço de e-mail deve ser válido.' })
  emailAddress: string;

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
  password: string;

  @IsNumber({}, { message: 'O número de telefone deve ser válido.' })
  phoneNumber: number;

  @IsEnum(['Aproved', 'Rejected', 'Analizing'], { message: 'Status da conta inválido.' })
  statusAccount: 'Aproved' | 'Rejected' | 'Analizing';

  @IsNumber({}, { message: 'Corridas canceladas deve ser um número.' })
  racesCanceleds: number;

  @IsNumber({}, { message: 'Corridas completadas deve ser um número.' })
  racesCompleteds: number;

  @IsString()
  lastConnectedDevice: string;

  @IsString()
  // @Matches(/\.(pdf|jpg|jpeg|png)$/i, { 
  //   message: 'A documentação deve ser um PDF ou uma imagem (JPG, JPEG, PNG).' 
  // })
  documentation: string;

  @IsOptional()
  @IsUrl({}, { message: 'A imagem do usuário deve ser uma URL válida.' })
  userImg?: string;
}
