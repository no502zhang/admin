import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { LayoutDefaultComponent } from './default/layout-default.component';
import { LayoutFullscreenComponent } from './fullscreen/layout-fullscreen.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LayoutDefaultComponent, LayoutFullscreenComponent,]
})
export class LayoutModule { }
