import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css']
})
export class StockItemComponent implements OnInit {  

  public name: string;
  public code: string;
  public price: number;
  public previousPrice: number;
  public positiveChange: boolean;
  public favorite: boolean;
  public stocks: Array<Stock>;


  constructor() { }

  ngOnInit() {
    this.stocks = [
      new Stock('CSE1223代写', "Java写不来？找我们！", "1223", 85, 80, "次"),
      new Stock('CSE5234代写', "Web App写不来？找我们！", "5234", 10, 20, "次"),
      new Stock('CSE Capstone代写', "毕业了还不会写？太菜了！找我们！", "Capstone", 876, 765, "次")
    ];

  }

  toggleFavorite(event: MouseEvent, i:number) {
    console.log('We are toggling the favorite state for this stock', event, i);
    this.stocks[i].favorite = !this.stocks[i].favorite;
  }
}