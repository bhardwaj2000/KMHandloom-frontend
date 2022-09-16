import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrdersComponent } from './orders/orders.component';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UpdateOrderComponent } from './update-order/update-order.component';

@NgModule({
  declarations: [
    AppComponent,
    OrdersComponent,
    AddOrdersComponent,
    UpdateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
