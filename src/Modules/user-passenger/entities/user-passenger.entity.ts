export class UserPassenger {
 
    UserId: string
    Name: string;
    EmailAdress: string;
    Password: string;
    PhoneNumber: string;
    StatusAccount: "Aproved" | "Rejected" | "Analizing" ;
    RacesCanceleds : number;
    RacesCompleteds : number;
    LastConnectedDeivice: string;
    Documentation: string; // PDF || IMG
    UserImg: string; // Imagem

}

