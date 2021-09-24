import { Component, EventEmitter,ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockItemComponent implements OnInit {  

  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean;
  @Input() public stocks: Array<Stock>;
  // @Output() private addToCart: EventEmitter<Stock>;


  constructor() {
    // this.addToCart = new EventEmitter<Stock>()
  }

  ngOnInit() {
  }

  onAddToCart(event: MouseEvent) {
    // console.log('We are toggling the favorite state for this stock', event, i);
    // this.stocks[i].favorite = !this.stocks[i].favorite;
    
    // this.addToCart.emit(this.order);
  }

  incrementOrderAmount() {
    // this.stock.price += 5;
  }

  decrementOrderAmount(){
    
  }
  
}