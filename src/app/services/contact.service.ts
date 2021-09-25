import { Injectable } from '@angular/core';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  private payment: Payment;

  constructor() {}

  createShip(payment: Payment) {
    this.payment = payment;
  }

  getShip(): Payment {
    return this.payment;
  }
}
