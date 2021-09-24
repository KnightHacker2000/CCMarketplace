import { Component, OnInit } from '@angular/core';
import { Stock } from './model/stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Breakfast In Bed';

  public stockarr: Array<Stock>;
  
  ngOnInit(): void{
    this.stockarr = [
      new Stock('Taro Milk Tea', "Taro! Taro! Taro!", "TMT", 15, "Cup", "../../assets/taro-milk-bubble-tea.jpeg"),
      new Stock('Hong Kong Milk Tea', "OG Milk Tea", "HKMT", 10, "Cup", "../../assets/hong-kong-milk-tea.jpeg"),
      new Stock('Caramel Pudding Milk Tea', "Fusion Tea!", "CPMT", 6, "Cup",  "../../assets/caramel.jpeg"),
      new Stock('Mango Milkshake', "Fresh mango, Milk and Tea!", "MM", 7, "Cup", "../../assets/mango-milkshake.jpeg"),
      new Stock('Americano Coffee', "Original American Flavor!", "AC", 8, "Cup", "../../assets/americano.jpeg")
    ];
  }
}
