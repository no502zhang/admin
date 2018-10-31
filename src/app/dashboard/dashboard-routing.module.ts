import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardDefaultComponent } from './default/dashboard-default.component';

const dashboardRoutes: Routes = [
  { path: '', redirectTo: 'default', pathMatch: 'full' },
  { path: 'default', component: DashboardDefaultComponent },
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
