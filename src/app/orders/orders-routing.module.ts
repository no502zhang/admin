import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { GoodsListComponent } from './goods-list/goods-list.component';
import { GoodsDetailComponent } from './goods-detail/goods-detail.component';

const orderRoutes: Routes = [
  { path: 'order-list', component: OrderListComponent },
  { path: 'order-detail/:id', component: OrderDetailComponent },
  { path: 'goods-list', component: GoodsListComponent },
  { path: 'goods-detail/:id', component: GoodsDetailComponent },
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