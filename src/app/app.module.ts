import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    ContactFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
