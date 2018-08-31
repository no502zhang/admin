import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Order } from './order.model';

import { ORDERS } from './order.mock';

import { MessageService } from '../../shared/message.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private messageService: MessageService) { }

  getOrders(): Observable<Order[]> {
    this.messageService.add('OrderService: getOrders');
    return of(ORDERS);
  }

  getOrder(id: number): Observable<Order> {
    this.messageService.add('OrderService: getOrder');
    for (const order of ORDERS) {
      if (order.id == id) {
        return of(order);
      }
    }
  }
}
