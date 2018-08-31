import { Component, OnInit, Input } from '@angular/core';
import { OrderSeller } from '../shared/order-seller.model';
import { OrderPropertyComponent } from '../order-property.component';

@Component({
  selector: 'orders-seller',
  templateUrl: './seller.component.html',
  styleUrls: ['./seller.component.css']
})
export class SellerComponent implements OrderPropertyComponent, OnInit {
  @Input() property: OrderSeller;

  constructor() { }

  ngOnInit() {
  }

}
