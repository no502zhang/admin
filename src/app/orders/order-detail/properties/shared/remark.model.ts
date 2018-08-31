import { OrderProperty } from "../../../shared/order-property.model";

export class Remark implements OrderProperty {
    type = { name: '交易说明', selector: 'orders-remark' };

    content: string;
}
