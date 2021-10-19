import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { Subscription } from 'rxjs';
import { Stock } from '../model/stock';
import { OrderService } from '../services/order.service';
import { StockService } from '../services/stock.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ConfirmationComponent implements OnInit {
  public order_response:any
  public message_bold: string
  public message_secondary: string
  public stockSub: Subscription
  public stocks:Stock[]

  constructor(private router: Router, private orderService: OrderService, private stockService:StockService) { }

  ngOnInit(): void {
    this.order_response = this.orderService.order_response;
    console.log(this.order_response.response);
    // this.message_bold = "Order Complete!"
    // this.message_secondary = "3413515133"

    
    if(this.order_response.response.code == "error"){
      console.log("HERE");
      this.message_bold = "Order Cancelled!"
      // this.message_secondary = "Sorry, BIB does not have enough ",this.stocks.find((x: any)=>x.id = this.order_response.response.notAvailItem.stock_code)?.name || "404";
      this.message_secondary = "Sorry, BIB does not have enough "+this.order_response.response.notAvailItem.stock_code;
    }   else{
      this.message_bold = "Order Complete!"

      this.message_secondary = this.order_response.response.code;

    }   

  }
  onContinue(){
    this.router.navigate(["/stock"]);
  }

}
