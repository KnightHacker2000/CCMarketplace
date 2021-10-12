import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { Payment } from 'src/app/model/payment';
import { Shipping } from '../model/shipping';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class OrderService {
  // private orderArr: Array<Order> = [];
  private order: Order
  private sum: number
  private payment_info: Payment
  private shipping_info: Shipping
  public order_response: any


  constructor(private http: HttpClient) {}

  setPaymentInfo(pay: Payment){
      this.payment_info = pay;
  }

  setShippingInfo(ship: Shipping){
    this.shipping_info = ship;
}

  createOrder(order: Order, sum: number) {
    this.order = order;
    this.sum = sum;
    console.log("[Angular Order Service] -- order created: ",this.order);
  }

  submitOrder(){
    this.http.post<{ 
      message: string,
       }>('http://localhost:8080/api/order',
       {
         order: this.order,
         sum: this.sum,
         payment_info: this.payment_info,
         shipping_info: this.shipping_info
        })
    .subscribe((responseData)=>{
        // this.stocks = stockData.stocks;
        // this.stocksUpdated.next([...this.stocks]);
        console.log("New Order Created: ",responseData);
        this.order_response = responseData;
        
    });
  }

  getOrder(): Order {
    return this.order;
  }

  getOrderSum(): number {
    return this.sum;
  }


}

