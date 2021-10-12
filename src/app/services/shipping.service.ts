import { Injectable } from '@angular/core';
import { Shipping } from '../model/shipping';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})

export class ShippingService {
  private shipping: Shipping;

  constructor(private orderService: OrderService) {}

  createShip(ship: Shipping) {
    this.shipping = ship;
    console.log(this.shipping);
    this.orderService.setShippingInfo(this.shipping);
  }

  getShip(): Shipping {
    return this.shipping;
  }
}
