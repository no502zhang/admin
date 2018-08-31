import { Component, OnInit, Input } from '@angular/core';
import { Remark } from '../shared/remark.model';
import { OrderPropertyComponent } from '../order-property.component';

@Component({
  selector: 'orders-remark',
  templateUrl: './remark.component.html',
  styleUrls: ['./remark.component.css']
})
export class RemarkComponent implements OrderPropertyComponent, OnInit {
  @Input() property: Remark;

  constructor() { }

  ngOnInit() {
  }

}
