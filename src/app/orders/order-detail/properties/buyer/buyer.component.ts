import { Component, OnInit, Input } from '@angular/core';
import { OrderBuyer } from '../shared/order-buyer.model';
import { OrderPropertyComponent } from '../order-property.component';

@Component({
  selector: 'orders-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.css']
})
export class BuyerComponent implements OrderPropertyComponent, OnInit {
  @Input() property: OrderBuyer;

  constructor() { }

  ngOnInit() {
  }

}
