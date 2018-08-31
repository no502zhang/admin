import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getOrderStatusName'
})
export class GetOrderStatusNamePipe implements PipeTransform {

  transform(status: number): string {
    switch (status) {
      case 1:
        return '提交资料';
      case 2:
        return '资料审核中';
      case 3:
        return '银行审核中';
      default:
        return '关闭';
    }
  }

}
