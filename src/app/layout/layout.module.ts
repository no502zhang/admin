import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DefaultLayoutComponent } from './default-layout/default-layout.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [DefaultLayoutComponent],
  exports: [DefaultLayoutComponent]
})
export class LayoutModule { }
