import { Injectable } from '@angular/core';
import { Payment } from '../model/payment';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  private payment: Payment;

  constructor() {}

  createPayment(payment: Payment) {
    this.payment = payment;
  }

  getPayment(): Payment {
    return this.payment;
  }
}
