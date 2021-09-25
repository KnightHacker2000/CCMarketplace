import { Injectable } from '@angular/core';
import { Shipping } from '../model/shipping';

@Injectable({
  providedIn: 'root'
})

export class ShippingService {
  private shipping: Shipping;

  constructor() {}

  createShip(ship: Shipping) {
    this.shipping = ship;
    console.log(this.shipping);
  }

  getShip(): Shipping {
    return this.shipping;
  }
}
