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
  }

  getShip(): Shipping {
    return this.shipping;
  }
}
