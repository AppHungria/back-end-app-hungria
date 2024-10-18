export class Race {

    RaceId : string
    UserId : string
    DriverId : string
    Origin : string
    Destination : string
    Price : number
    TotalDistance : number
    Status: 'Search' | 'Completed' | 'Canceled'
    AvaliationDriver: number
    AvaliationPassenger: number
    Date : Date
    ComentPassenger: string

}
