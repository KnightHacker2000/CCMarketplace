import { Component, OnInit } from '@angular/core';
import { Shipping } from 'src/app/model/shipping';
import { ShippingService } from '../services/shipping.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-shippingform',
  templateUrl: './shippingform.component.html',
  styleUrls: ['./shippingform.component.css']
})
export class ShippingformComponent implements OnInit {
  public postal: string;
  public method: string;
  public email: string;
  public fee: number;
  public ship: Shipping;
  constructor(private shippingService: ShippingService, private router: Router) { }
  

  ngOnInit(): void {
    this.postal = "";
    this.method = "";
    this.email = "";
    this.fee = 0;
  }
  onGoToSubmit() {
    this.postal = (document.getElementById("postalAddr") as HTMLInputElement).value;
    this.method = (document.getElementById("shippingMethod") as HTMLInputElement).value;
    this.email = (document.getElementById("emailAddr") as HTMLInputElement).value;
    this.ship = new Shipping(this.postal, this.method, this.email, this.fee);
    this.shippingService.createShip(this.ship);

    this.router.navigate(['/checkoutform']);
    
    console.log(this.postal);
    console.log(this.method);
    console.log(this.email);
  }

}
