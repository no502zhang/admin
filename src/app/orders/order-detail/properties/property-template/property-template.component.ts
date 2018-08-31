import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver, Type } from '@angular/core';

import { PropertyHostDirective } from '../shared/property-host.directive';

import { BuyerComponent } from '../buyer/buyer.component';
import { SellerComponent } from '../seller/seller.component';
import { EstateComponent } from '../estate/estate.component';
import { RemarkComponent } from '../remark/remark.component';
import { ApprovalComponent } from '../approval/approval.component';
import { OrderProperty } from '../../../shared/order-property.model';

@Component({
  selector: 'orders-property-template',
  templateUrl: './property-template.component.html',
  styleUrls: ['./property-template.component.css']
})
export class PropertyTemplateComponent implements OnInit {
  @Input() property: OrderProperty;

  @ViewChild(PropertyHostDirective) propertyHost: PropertyHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getPropertyComponent(this.property.type.selector));
    let viewContainerRef = this.propertyHost.viewContainerRef;
    viewContainerRef.clear();
    let componentRef = viewContainerRef.createComponent(componentFactory);
    componentRef.instance.property = this.property;
  }

  getPropertyComponent(name: string): Type<any> {
    switch (name) {
      case 'orders-buyer': return BuyerComponent;
      case 'orders-seller': return SellerComponent;
      case 'orders-estate': return EstateComponent;
      case 'orders-remark': return RemarkComponent;
      case 'orders-approval': return ApprovalComponent;
    }
  }
}
