import { Injectable } from '@nestjs/common'; 
import { OrdersService } from '../../kitchen/orders/orders.service'; 
import { GetBillDto } from '../dto/get-bill.dto'; 
 
@Injectable() 
export class BillsService { 
    // Accountant needs to ask the Chef about orders 
    constructor(private chef: OrdersService) {} 
 
    generateBill(data: GetBillDto) { 
        const orders = this.chef.getOrders().filter(o => o.tableNo == data.tableNo); 
        const subtotal = orders.reduce((sum, o) => sum + o.total, 0); 
        const tax = subtotal * 0.1; 
        const tip = data.tip || 0; 
 
        return { 
            tableNo: data.tableNo, 
            items_consumed: orders.length, 
            subtotal, 
            tax: tax, 
            tip, 
            total_due: subtotal + tax + tip 
        }; 
    } 
} 