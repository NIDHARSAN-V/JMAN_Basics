import { Controller, Get, Query } from '@nestjs/common'; 
import { BillsService } from './bills.service'; 
import { GetBillDto } from '../dto/get-bill.dto'; 
 
@Controller('bills') 
export class BillsController { 
    // Cashier talks to Accountant 
    constructor(private accountant: BillsService) {} 
 
    @Get() 
    getBill(@Query() query: GetBillDto) { 
        console.log(`Cashier printing bill for Table ${query.tableNo} with tip $${query.tip || 0}`); 
        return this.accountant.generateBill(query); 
    } 
} 