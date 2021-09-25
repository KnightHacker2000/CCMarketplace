import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, AfterViewChecked{

  constructor(private orderService: OrderService ) {}
  
  onContinue(){
    console.log( this.orderService.getOrder());
  }
  ngAfterViewChecked() {
    console.log( this.orderService.getOrder());
  }


  ngOnInit() {
    
  }

}
