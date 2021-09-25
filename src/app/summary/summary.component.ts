import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order';
import { Item } from '../model/item';
import { Shipping } from '../model/shipping';
import {ShippingService} from '../services/shipping.service'
import { Payment } from '../model/payment';
import { PaymentService } from '../services/contact.service'
import { Router } from '@angular/router'


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, AfterViewChecked{
  public items: Array<String>
  public numbers: Array<Number>
  public shipping: Shipping
  public payment: Payment
  constructor(private orderService: OrderService, private shippingService: ShippingService, private paymentService: PaymentService, private router: Router) {
    var itemArray = this.orderService.getOrder().itemArr;
    this.shipping = this.shippingService.getShip();
    this.payment = this.paymentService.getPayment();
    this.items = new Array();
    this.numbers = new Array();
    for (var i = 0; i < itemArray.length ; i++){
      if (itemArray[i].amount != 0){
        var code = itemArray[i].stock_code;
        var str = "";
        if (code === "TMT"){
          str = "Taro Milk Tea";
        }
        else if (code === "HKMT"){
          str = "Hong Kong Milk Tea";
        }
        else if (code === "CPMT"){
          str = "Caramel Pudding Milk Tea";
        }
        else if (code === "MM"){
          str = "Mango Milkshake";
        }
        else if (code === "AC"){
          str = "Americano Coffee"
        }

        this.items.push(str);
        this.numbers.push(itemArray[i].amount);
      }
      


    }
  }
  
  onContinue(){
    this.router.navigate(["/confirmation"]);
  }
  ngAfterViewChecked() {
    console.log( this.orderService.getOrder());
  }


  ngOnInit() {
    
  }

}
