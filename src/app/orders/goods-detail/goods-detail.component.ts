import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoodsService } from '../shared/goods.service';

@Component({
  selector: 'goods-detail',
  templateUrl: './goods-detail.component.html',
  styleUrls: ['./goods-detail.component.css']
})
export class GoodsDetailComponent implements OnInit {
  goodsForm: FormGroup;

  goodsId: number;

  constructor(private goodsService: GoodsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.goodsForm = this.formBuilder.group({
      name: [null, [Validators.required]],
      picUrl: [null, [Validators.required]],
      remark: [null, []],
    });
  }

  submitForm() {
    if (this.goodsId > 0) {
      console.log('update OK!');
    } else {
      this.goodsService.addGoods({
        id: null, name: this.goodsForm.get("name").value, picUrl: this.goodsForm.get("picUrl").value, remark: this.goodsForm.get("remark").value
      }).subscribe(user => {
        console.log('add OK!');
      });
    }
  }
}
