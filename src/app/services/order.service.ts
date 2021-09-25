import { Injectable } from '@angular/core';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  // private orderArr: Array<Order> = [];
  private order: Order

  constructor() {}

  createOrder(order: Order) {
    this.order = order
    console.log(this.order);
  }

  getOrder(): Order {
    return this.order;
  }
}

