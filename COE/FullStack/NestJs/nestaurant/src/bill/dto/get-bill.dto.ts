import { IsInt, IsOptional, IsPositive, Min } from 'class-validator'; 
import { Type } from 'class-transformer'; 
 
export class GetBillDto { 
    @Type(() => Number) 
    @IsInt() 
    @Min(1) 
    tableNo: number; 
 
    @IsOptional() 
    @Type(() => Number) 
    @IsPositive() 
    tip?: number; 
} 