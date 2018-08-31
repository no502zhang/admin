import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DefaultDashboardComponent],
  exports: [DefaultDashboardComponent]
})
export class DashboardModule { }
