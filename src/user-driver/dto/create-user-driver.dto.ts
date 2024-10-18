import { IsEmail, IsNumber, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDriverDto {

    @IsString()
    DriverId: string

    @IsString()
    Name: string;

    @IsEmail()
    EmailAdress: string;

    @IsString()
    @MinLength(6, { message: 'Password must be at least 6 characters long.' })
    @MaxLength(16 , {message: 'Password must be at max 16 characters long.' })
    password: string;

    @IsString()
    CarId: string;

    @IsNumber()
    PhoneNumber: number;

    
    @IsNumber()
    Saldo: number;
  
    @IsString()
    StatusAccount: "Aproved" | "Rejected" | "Analizing" ;

    @IsString()
    StatusWorking: "Online" | "Offline" | "InRace" ;
  
    @IsNumber()
    RacesCanceleds : number;

    @IsNumber()
    RacesCompleteds : number;
  
    @IsString()
    LastConnectedDeivice: string;

}
