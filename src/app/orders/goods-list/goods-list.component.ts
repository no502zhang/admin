import { Component, OnInit } from '@angular/core';
import { Goods } from '../shared/goods.model';
import { GoodsService } from '../shared/goods.service';

@Component({
  selector: 'app-goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {
  goodsList: Goods[] = [];
  nzTotal = 0;
  nzPageIndex = 1;
  nzPageSize = 10;

  constructor(private goodsService: GoodsService) { }

  ngOnInit() {
    this.getGoodsList();
  }

  getGoodsList() {
    this.goodsService.getGoodsList().subscribe(page => {
      this.goodsList = page.list;
      this.nzTotal = page.total;
      this.nzPageIndex = page.pageNum;
      this.nzPageSize = page.pageSize;
    })
  }
}
