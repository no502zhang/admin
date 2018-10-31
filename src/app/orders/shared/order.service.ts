import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Order } from './order.model';

import { ORDERS } from './order.mock';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor() { }

  getOrders(): Observable<Order[]> {
    return of(ORDERS);
  }

  getOrder(id: number): Observable<Order> {
    for (const order of ORDERS) {
      if (order.id == id) {
        return of(order);
      }
    }
  }
}
