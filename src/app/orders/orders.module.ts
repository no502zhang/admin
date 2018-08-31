import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { OrdersRoutingModule } from './orders-routing.module';
import { PropertiesModule } from './order-detail/properties/properties.module';

import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';

import { GetOrderStatusNamePipe } from './shared/get-order-status-name.pipe';
import { FlowComponent } from './order-detail/flow/flow.component';

@NgModule({
  imports: [
    SharedModule,
    OrdersRoutingModule,
    PropertiesModule
  ],
  declarations: [OrderListComponent, OrderDetailComponent, GetOrderStatusNamePipe, FlowComponent],
  exports: [OrderListComponent, OrderDetailComponent]
})
export class OrdersModule { }
