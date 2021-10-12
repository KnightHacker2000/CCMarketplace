import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { OrderService } from './services/order.service';
import { Stock } from './model/stock';
import { StockService } from './services/stock.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, OnDestroy,
                                     DoCheck, AfterContentChecked,
                                     AfterContentInit, AfterViewChecked,
                                     AfterViewInit{
  title = 'Breakfast In Bed';

  public stockarr: Array<Stock>;
  constructor(private orderService: OrderService,private stockService: StockService) { }
  
  ngOnInit(): void{
    // this.stockarr = [
    //   new Stock('Taro Milk Tea', "Taro! Taro! Taro!", "TMT", 15, "Cup", "../../assets/taro-milk-bubble-tea.jpeg"),
    //   new Stock('Hong Kong Milk Tea', "OG Milk Tea", "HKMT", 10, "Cup", "../../assets/hong-kong-milk-tea.jpeg"),
    //   new Stock('Caramel Pudding Milk Tea', "Fusion Tea!", "CPMT", 6, "Cup",  "../../assets/caramel.jpeg"),
    //   new Stock('Mango Milkshake', "Fresh mango, Milk and Tea!", "MM", 7, "Cup", "../../assets/mango-milkshake.jpeg"),
    //   new Stock('Americano Coffee', "Original American Flavor!", "AC", 8, "Cup", "../../assets/americano.jpeg")
    // ];
    this.stockService.getStocks();

  }

  // lifcycle hooks
  ngAfterViewInit(): void {
    // console.log('App Component - After View Init');
  }
  ngAfterViewChecked(): void {
    // console.log('App Component - After View Checked');
  }
  ngAfterContentInit(): void {
    // console.log('App Component - After Content Init');
  }
  ngAfterContentChecked(): void {
    // console.log('App Component - After Content Checked');
  }
  ngDoCheck(): void {
    // console.log('App Component - Do Check');
  }
  ngOnDestroy(): void {
    // console.log('App Component - On Destroy');
  }
  ngOnChanges(changes: SimpleChanges): void {
    // console.log('App Component - On Changes - ', changes);
  }
}
