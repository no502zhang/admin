import { Component, OnInit, Input } from '@angular/core';
import { Estate } from '../shared/estate.model';
import { OrderPropertyComponent } from '../order-property.component';

@Component({
  selector: 'orders-estate',
  templateUrl: './estate.component.html',
  styleUrls: ['./estate.component.css']
})
export class EstateComponent implements OrderPropertyComponent, OnInit {
  @Input() property: Estate;

  constructor() { }

  ngOnInit() {
  }

}
