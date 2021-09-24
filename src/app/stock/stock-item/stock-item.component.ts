import { Component, EventEmitter,ChangeDetectionStrategy, Input, OnInit, SimpleChanges, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

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
  @Input() public stocks: Array<Stock>;
  // @Output() private addToCart: EventEmitter<Stock>;


  constructor() {
    // this.addToCart = new EventEmitter<Stock>()
  }

  onAddToCart(index: number) {
    // console.log('We are toggling the favorite state for this stock', event, i);
    // this.stocks[i].favorite = !this.stocks[i].favorite;
    
    // this.addToCart.emit(this.order);
    
    console.log('Order amount: ',this.amountArr);
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