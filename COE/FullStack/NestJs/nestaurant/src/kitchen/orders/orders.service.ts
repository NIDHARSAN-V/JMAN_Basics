import { Injectable } from '@nestjs/common'; 
import { CreateOrderDto } from './../dto/create-order.dto'; 
 
export interface Order { 
    id: string; 
    tableNo: number; 
    items: { name: string; qty: number; price: number }[]; 
    total: number; 
    status: 'COOKING' | 'READY'; 
} 
 
@Injectable() 
export class OrdersService { 
    private orders: Order[] = []; 
 
    // The restaurant menu (hardcoded for simplicity) 
    private menu = [ 
        { name: 'Soup', price: 10, category: 'Starters' }, 
        { name: 'Salad', price: 10, category: 'Starters' }, 
        { name: 'Bruschetta', price: 12, category: 'Starters' }, 
        { name: 'Steak', price: 25, category: 'Main Course' }, 
        { name: 'Burger', price: 15, category: 'Main Course' }, 
        { name: 'Pasta', price: 18, category: 'Main Course' }, 
        { name: 'Ice Cream', price: 8, category: 'Desserts' }, 
        { name: 'Cake', price: 10, category: 'Desserts' }, 
        { name: 'Coffee', price: 5, category: 'Drinks' }, 
    ]; 
 
    constructor() { 
        // Chef keeps some starter orders warm 
        this.createOrder({ 
            tableNo: 1, 
            items: [{ name: 'Soup', qty: 1, price: 10 }, { name: 'Salad', qty: 1, price: 10 }], 
        }); 
    } 
 
    getMenu(page: number) { 
        const itemsPerPage = 3; 
        const start = (page - 1) * itemsPerPage; 
        const items = this.menu.slice(start, start + itemsPerPage); 
        return { 
            page, 
            totalPages: Math.ceil(this.menu.length / itemsPerPage), 
            items, 
        }; 
    } 
 
    createOrder(dto: CreateOrderDto) { 
        const total = dto.items.reduce((sum, item) => sum + item.price * item.qty, 0); 
        const order: Order = { 
            id: Math.random().toString(36).substr(2, 9), 
            tableNo: dto.tableNo, 
            items: dto.items, 
            total, 
            status: 'COOKING', 
        }; 
        this.orders.push(order); 
        console.log(`Chef is cooking order for Table ${dto.tableNo}`); 
        return order; 
    } 
 
    getOrders() { 
        return this.orders; 
    } 
} 