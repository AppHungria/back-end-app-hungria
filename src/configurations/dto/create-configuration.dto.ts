import { Type } from "class-transformer"
import {  IsNumber, IsString } from "class-validator"

export class CreateConfigurationDto {

    @IsNumber()
    MinimunValueForKm : number
    
    @IsString()
    WorkingCits: string

    @Type(() => Date)
    MinimunCarFabrigation: Date

    @IsNumber()
    Taxa: number

}
