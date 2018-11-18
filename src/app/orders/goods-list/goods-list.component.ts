import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Goods } from '../shared/goods.model';
import { GoodsService } from '../shared/goods.service';

@Component({
  selector: 'goods-list',
  templateUrl: './goods-list.component.html',
  styleUrls: ['./goods-list.component.css']
})
export class GoodsListComponent implements OnInit {
  searchForm: FormGroup;

  goodsList: Goods[] = [];
  nzTotal = 0;
  nzPageIndex = 1;
  nzPageSize = 10;

  constructor(private goodsService: GoodsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.getGoodsList();
    this.searchForm = this.formBuilder.group({
      searchKey: []
    });
  }

  getGoodsList() {
    this.goodsService.getGoodsList(this.nzPageIndex, this.nzPageSize).subscribe(page => {
      this.goodsList = page.list;
      this.nzTotal = page.total;
      this.nzPageIndex = page.pageNum;
      this.nzPageSize = page.pageSize;
    })
  }

  search() {
    this.getGoodsList();
  }
}
