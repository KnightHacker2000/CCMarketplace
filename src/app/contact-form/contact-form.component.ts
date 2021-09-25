import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/model/payment';
import { PaymentService } from '../services/contact.service';
import { OrderService } from '../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public amount: number;
  public cardNum: string;
  public exp: string;
  public cvv: string;
  public name: string;
  public payment: Payment;
  constructor(private paymentService: PaymentService, private orderService: OrderService, private router: Router) { }
  

  ngOnInit(): void {
    this.amount = this.orderService.getOrderSum();
    this.cardNum = "";
    this.exp = "";

    
  }
  onGoToSubmit() {
    this.name = (document.getElementById("firstName") as HTMLInputElement).value+(document.getElementById("lastName") as HTMLInputElement).value
    this.cardNum = (document.getElementById("cardNumber") as HTMLInputElement).value;
    this.exp = (document.getElementById("expDate") as HTMLInputElement).value;
    this.cvv = (document.getElementById("securityCode") as HTMLInputElement).value;
    this.payment = new Payment(this.amount, this.cardNum, this.exp, this.cvv, this.name);
    this.paymentService.createPayment(this.payment);
    this.router.navigate(['/summary']);
  }

}
