import { IsBoolean, IsEmail, IsNumber, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserPassengerDto {

    @IsString()
    UserId: string

    @IsString()
    Name: string;

    @IsEmail()
    EmailAdress: string;

    @IsString()
    Password: string;

    @IsNumber()
    PhoneNumber: number;
  
    @IsString()
    StatusAccount: "Aproved" | "Rejected" | "Analizing" ;
  
    @IsNumber()
    RacesCanceleds : number;

    @IsNumber()
    RacesCompleteds : number;

    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long.' })
    password: string;
  
    @IsString()
    LastConnectedDeivice: string;

}
