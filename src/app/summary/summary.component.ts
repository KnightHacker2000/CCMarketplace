import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';
import { Order } from '../model/order';
import { Item } from '../model/item';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, AfterViewChecked{
  public items: Array<String>
  public numbers: Array<Number>
  constructor(private orderService: OrderService ) {
    var itemArray = this.orderService.getOrder().itemArr;
    this.items = new Array();
    this.numbers = new Array();
    for (var i = 0; i < itemArray.length ; i++){
      if (itemArray[i] != null){
        this.items.push(itemArray[i].stock_code);
        this.numbers.push(itemArray[i].amount);
      }
      
    }
  }
  
  onContinue(){
    console.log( this.orderService.getOrder());
  }
  ngAfterViewChecked() {
    console.log( this.orderService.getOrder());
  }


  ngOnInit() {
    
  }

}
