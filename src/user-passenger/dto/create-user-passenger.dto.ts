import { IsBoolean, IsEmail, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserPassengerDto {

    @IsString()
    UserId: string

    @IsString()
    Name: string;

    @IsEmail()
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
    password: string;

    @IsNumber()
    PhoneNumber: number;

    @IsString()
    StatusAccount: "Aproved" | "Rejected" | "Analizing";
  
    @IsNumber()
    RacesCanceleds : number;

    @IsNumber()
    RacesCompleteds : number;
  
    @IsString()
    LastConnectedDeivice: string;

    @IsString()
    Documentation: string; // PDF || IMG

    @IsString()
    UserImg: string; // Imagem

}
