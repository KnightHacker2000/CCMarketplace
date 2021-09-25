import { Injectable } from '@angular/core';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  // private orderArr: Array<Order> = [];
  private order: Order
  private sum: number;

  constructor() {}

  createOrder(order: Order, sum: number) {
    this.order = order;
    this.sum = sum;
    console.log(this.order);
  }

  getOrder(): Order {
    return this.order;
  }

  getOrderSum(): number {
    return this.sum;
  }
}

