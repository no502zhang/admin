import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Page } from './page.model';
import { Goods } from './goods.model';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor(private http: HttpClient) { }

  getGoodsList(pageNumber, pageSize): Observable<Page> {
    return this.http.get<Page>('/gateway/order/order/goods', { params: { pageNumber: pageNumber, pageSize: pageSize } })
  }

  addGoods(goods: Goods): Observable<Goods> {
    return this.http.post<Goods>('/gateway/order/order/goods', goods)
  }
}
