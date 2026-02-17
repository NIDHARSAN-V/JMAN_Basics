import { IsArray, IsInt, IsNotEmpty, IsPositive, IsString, Min, MinLength, ValidateNested } from 'class-validator'; 
import { Type } from 'class-transformer'; 
 
class OrderItemDto { 
    @IsString() 
    @MinLength(2) 
    name: string; 
 
    @IsInt() 
    @IsPositive() 
    qty: number; 
 
    @IsPositive() 
    price: number; 
} 
 
export class CreateOrderDto { 
    @IsInt() 
    @Min(1) 
    tableNo: number; 
 
    @IsArray() 
    @IsNotEmpty() 
    @ValidateNested({ each: true }) 
    @Type(() => OrderItemDto) 
    items: OrderItemDto[]; 
} 