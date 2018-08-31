import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { EstateComponent } from './estate/estate.component';
import { RemarkComponent } from './remark/remark.component';
import { ApprovalComponent } from './approval/approval.component';

import { PropertyHostDirective } from './shared/property-host.directive';
import { PropertyTemplateComponent } from './property-template/property-template.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [BuyerComponent, SellerComponent, EstateComponent, RemarkComponent, ApprovalComponent, PropertyHostDirective, PropertyTemplateComponent],
  entryComponents: [BuyerComponent, SellerComponent, EstateComponent, RemarkComponent, ApprovalComponent],
  exports: [PropertyHostDirective, PropertyTemplateComponent]
})
export class PropertiesModule { }
