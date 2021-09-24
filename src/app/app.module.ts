import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    StockItemComponent,
    ContactFormComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,               
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
