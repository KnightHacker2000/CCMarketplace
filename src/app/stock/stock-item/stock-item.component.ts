import { Component, EventEmitter,ChangeDetectionStrategy, Input, OnInit, SimpleChanges, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { Stock } from 'src/app/model/stock';
import { Order } from 'src/app/model/order';
import { Item } from 'src/app/model/item';


@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit, OnChanges, OnDestroy,
DoCheck, AfterContentChecked,
AfterContentInit, AfterViewChecked,
AfterViewInit {  

  public name: string;
  public code: string;
  public price: number;
  public amountArr: Array<number>;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean;
  public order: Order;
  public itemArr: Array<Item>;
  @Input() public stocks: Array<Stock>;
  // @Output() private addToCart: EventEmitter<Stock>;


  constructor(private orderService: OrderService) { }

  onAddToCart(index: number) {
    // console.log('We are toggling the favorite state for this stock', event, i);
    // this.stocks[i].favorite = !this.stocks[i].favorite;
    
    // this.addToCart.emit(this.order);
    if(this.amountArr[index] != 0){
      if (typeof this.itemArr[index] != 'undefined' && this.itemArr[index] !== null) {
        this.itemArr[index].amount = this.amountArr[index];
      } else{
        let item = new Item(this.stocks[index].code,this.amountArr[index]);
        this.itemArr[index] = item;
      }
  
      console.log('Order array updated; ', this.itemArr);
    }

    
  }

  onGoToShipping() {
    // this.order.itemArr = new Array<Item>();
    this.order.createItemArr(this.itemArr);
    // this.order.itemArr[0] = new Item('sff',3);
    this.orderService.createOrder(this.order);
  }

  incrementOrderAmount(index: number) {
    // this.stock.price += 5;
    this.amountArr[index]++;
  }

  decrementOrderAmount(index: number){
    if(this.amountArr[index] != 0){
      this.amountArr[index]--;
    }
  }

  // lifecycle hooks
  ngOnInit() {
    // initialize the order amount array
    this.amountArr = [0,0,0,0,0];
    this.itemArr = new Array<Item>(5);
    
    // console.log('item arr: ',this.order.itemArr);
    this.order = new Order();
  } 

  ngAfterViewInit(): void {
    // console.log('Stock Item Component - After View Init');
  }
  ngAfterViewChecked(): void {
    // console.log('Stock Item Component - After View Checked');
  }
  ngAfterContentInit(): void {
    // console.log('Stock Item Component - After Content Init');
  }
  ngAfterContentChecked(): void {
    // console.log('Stock Item Component - After Content Checked');
  }
  ngDoCheck(): void {
    // console.log('Stock Item Component - Do Check');
  }
  ngOnDestroy(): void {
    // console.log('Stock Item Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('Stock Item Component - On Changes - ', changes);
  }
  
}