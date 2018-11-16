import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { GoodsListComponent } from './goods-list/goods-list.component';

const orderRoutes: Routes = [
  { path: 'order-detail/:id', component: OrderDetailComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'goods-list', component: GoodsListComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(orderRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class OrdersRoutingModule { }