import { Injectable } from '@angular/core';
import { Payment } from '../model/payment';
import { OrderService } from './order.service';

@Injectable({
  providedIn: 'root'
})

export class PaymentService {
  private payment: Payment;

  constructor(private orderService: OrderService) {}

  createPayment(payment: Payment) {
    this.payment = payment;
    this.orderService.setPaymentInfo(this.payment);
  }

  getPayment(): Payment {
    return this.payment;
  }
}
