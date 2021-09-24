import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor() {private orderService: OrderService }

  ngOnInit() {
    this.orderService.getOrder();
  }

}
