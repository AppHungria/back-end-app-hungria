export class UserDriver {
    
    DriverId: string;
    Name: string;
    EmailAdress: string;
    password: string;
    CarId: string;
    PhoneNumber: number;
    Saldo: number;
    StatusAccount: "Aproved" | "Rejected" | "Analizing";
    StatusWorking: "Online" | "Offline" | "InRace" ;
    RacesCanceleds : number;
    RacesCompleteds : number;
    LastConnectedDeivice: string;
    Cnh: string;
    
}
