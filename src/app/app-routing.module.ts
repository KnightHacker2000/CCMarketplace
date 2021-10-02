import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ContactFormComponent} from "./contact-form/contact-form.component";
import { HomeComponent } from './home/home.component';
import { ShippingformComponent } from './shippingform/shippingform.component';
import { StockItemComponent } from './stock/stock-item/stock-item.component';
import { SummaryComponent } from './summary/summary.component';

const routes: Routes = [
  {path: 'checkoutform', component: ContactFormComponent},
  {path: 'summary', component: SummaryComponent}, 
  {path: 'stock', component: StockItemComponent},
  {path: 'shippingform', component: ShippingformComponent},
  {path: 'confirmation', component: ConfirmationComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ContactFormComponent, ShippingformComponent]
