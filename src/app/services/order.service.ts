import { Injectable } from '@angular/core';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  private orderArr: Array<Order> = [];

  constructor() {}

  createOrder(order: Order) {
    this.orderArr.push(order);
  }

  getOrder(){
    return this.orderArr;
  }
}
