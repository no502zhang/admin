import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Order } from '../shared/order.model';
import { OrderService } from '../shared/order.service';
import { ORDER_INIT } from '../shared/order.mock';

@Component({
  selector: 'orders-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: Order;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService) { }

  ngOnInit() {
    this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        if (Number(params.get('id')) > 0) {
          return this.orderService.getOrder(Number(params.get('id')));
        } else {
          return of(ORDER_INIT);
        }
      })
    ).subscribe(order => this.order = order);
  }
}
