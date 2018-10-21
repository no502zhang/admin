import { Component, OnInit, Input } from '@angular/core';
import { Approval } from '../shared/approval.model'
import { OrderPropertyComponent } from '../order-property.component';

@Component({
  selector: 'orders-approval',
  templateUrl: './approval.component.html',
  styleUrls: ['./approval.component.css']
})
export class ApprovalComponent implements OrderPropertyComponent, OnInit {
  @Input() property: Approval;

  constructor() { }

  ngOnInit() {
  }

}
