import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[orders-property-host]'
})
export class PropertyHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
