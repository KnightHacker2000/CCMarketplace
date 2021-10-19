import { Component, EventEmitter,ChangeDetectionStrategy, Input, OnInit, SimpleChanges, OnChanges, OnDestroy, DoCheck, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { OrderService } from '../../services/order.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Stock } from 'src/app/model/stock';
import { Order } from 'src/app/model/order';
import { Item } from 'src/app/model/item';
import { StockService } from 'src/app/services/stock.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-stock-item',
  templateUrl: './stock-item.component.html',
  styleUrls: ['./stock-item.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
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
  public itemArr: Array<Item> = [];
  public stocks: Array<Stock>;
  private stockSub: Subscription;
  // @Input() public stocks: Array<Stock>;
  // @Output() private addToCart: EventEmitter<Stock>;


  constructor(private stockService: StockService, private orderService: OrderService, private router: Router) { }

  onAddToCart(index: number) {
    // console.log('We are toggling the favorite state for this stock', event, i);
    // this.stocks[i].favorite = !this.stocks[i].favorite;
    
    // this.addToCart.emit(this.order);
    
    if(this.amountArr[index] != 0){
        this.itemArr[index].amount = this.amountArr[index];
      console.log('Order array updated; ', this.itemArr);
    }else{
        if(this.itemArr[index].amount !=0){
          this.itemArr[index].amount = 0;
        }
    }

    // } else{
    //   if (typeof this.itemArr[index] != 'undefined' && this.itemArr[index] !== null) {
    //     this.itemArr[index].amount = 0;
    //   } 
    // }

    
  }

  onGoToShipping() {
    // this.order.itemArr = new Array<Item>();
    this.order.createItemArr(this.itemArr);
    // this.order.itemArr[0] = new Item('sff',3);
    console.log('Order: ',this.orderService.getOrder());
    let sum = 0;
    for(let i=0; i<this.order.itemArr.length;i++){
      sum += this.stocks[i].price * this.order.itemArr[i].amount;
    }
    this.orderService.createOrder(this.order, sum);
    console.log('Sum: ',sum);
    this.router.navigate(['/shippingform']);
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
    // this.stocks = [
    //   new Stock('Taro Milk Tea', "Taro! Taro! Taro!", "TMT", 15, "Cup", "../../assets/taro-milk-bubble-tea.jpeg"),
    //   new Stock('Hong Kong Milk Tea', "OG Milk Tea", "HKMT", 10, "Cup", "../../assets/hong-kong-milk-tea.jpeg"),
    //   new Stock('Caramel Pudding Milk Tea', "Fusion Tea!", "CPMT", 6, "Cup",  "../../assets/caramel.jpeg"),
    //   new Stock('Mango Milkshake', "Fresh mango, Milk and Tea!", "MM", 7, "Cup", "../../assets/mango-milkshake.jpeg"),
    //   new Stock('Americano Coffee', "Original American Flavor!", "AC", 8, "Cup", "../../assets/americano.jpeg")
    // ];
    this.stockSub = this.stockService.getStocksUpdateListener()
      .subscribe((stocks:Stock[])=>{
        this.stocks = stocks;
        console.log("[Angular Stock Component]: ",this.stocks)
        for(let i = 0; i < 5; i++){
          this.itemArr[i] = new Item(this.stocks[i].id,0);
        }
      });
    // initialize the order amount array
    this.amountArr = [0,0,0,0,0];
    this.order = new Order();
    
    // console.log('item arr: ',this.order.itemArr);
    console.log('Stock Item Component - After Init');

  } 

  ngAfterViewInit(): void {
    // console.log('Stock Item Component - After View Init');
    console.log('Stock Item Component - After View Init');

  }
  ngAfterViewChecked(): void {
    console.log('Stock Item Component - After View Checked');
    // console.log('Stock Item Component - After View Checked, Stock Arr size: ',this.stocks.length);

  }
  ngAfterContentInit(): void {
    // console.log('Stock Item Component - After Content Init');
    console.log('Stock Item Component - After Content Init');

  }
  ngAfterContentChecked(): void {
    console.log('Stock Item Component - After Content Checked');
  }
  ngDoCheck(): void {
    console.log('Stock Item Component - Do Check');
  }
  ngOnDestroy(): void {
    console.log('Stock Item Component - On Destroy');
    this.stockSub.unsubscribe();
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Stock Item Component - On Changes - ', changes);
    this.stockSub = this.stockService.getStocksUpdateListener()
      .subscribe((stocks:Stock[])=>{
        this.stocks = stocks;
        console.log("[Angular Stock Component]: ",this.stocks)
        for(let i = 0; i < 5; i++){
          this.itemArr[i] = new Item(this.stocks[i].id,0);
        }
      });
  }
  
}