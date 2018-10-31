import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutDefaultComponent } from './layout/default/layout-default.component';

import { moduleRoutes } from '../../config/router.config';

const routes: Routes = [
  {
    path: '',
    component: LayoutDefaultComponent,
    children: moduleRoutes
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
