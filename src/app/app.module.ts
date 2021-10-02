import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';
import { OrderService } from './services/order.service';
import { ShippingformComponent } from './shippingform/shippingform.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { PaymentService } from './services/contact.service';
import { ShippingService } from './services/shipping.service';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    ContactFormComponent,
    SummaryComponent,
    ShippingformComponent,
    ConfirmationComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,               
    AppRoutingModule
  ],
  providers: [OrderService, PaymentService, ShippingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
