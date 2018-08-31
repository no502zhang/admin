import { Component, OnInit, Input } from '@angular/core';
import { Flow } from '../../shared/flow.model';

@Component({
  selector: 'orders-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.css']
})
export class FlowComponent implements OnInit {
  @Input() flow: Flow;

  constructor() { }

  ngOnInit() {
  }

}
