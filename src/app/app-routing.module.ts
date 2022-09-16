import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrdersComponent } from './add-orders/add-orders.component';
import { OrdersComponent } from './orders/orders.component';
import { UpdateOrderComponent } from './update-order/update-order.component';

const routes: Routes = [
  {path:'orders',component:OrdersComponent},
  {path:'add-orders',component:AddOrdersComponent},
  {path:'update-orders',component:UpdateOrderComponent},

  {path:'',redirectTo:'orders',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
