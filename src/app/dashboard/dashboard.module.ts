import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardDefaultComponent } from './default/dashboard-default.component';

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardDefaultComponent],
  exports: [DashboardDefaultComponent]
})
export class DashboardModule { }
