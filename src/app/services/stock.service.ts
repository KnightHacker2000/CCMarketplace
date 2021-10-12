import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Stock } from '../model/stock';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks: Stock[] = [];
  private stocksUpdated = new Subject<Stock[]>();

  constructor(private http: HttpClient){}

  getStocks(){
    this.http.get<{ 
      message: string,
      stocks: Stock[]
       }>('http://localhost:3000/api/stock')
    .subscribe((stockData)=>{
      console.log(stockData.stocks);
        this.stocks = stockData.stocks;
        this.stocksUpdated.next([...this.stocks]);
    }); 
  }

  getStocksUpdateListener(){
    return this.stocksUpdated.asObservable();
  }

}
