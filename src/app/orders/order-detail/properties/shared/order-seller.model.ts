import { OrderProperty } from "../../../shared/order-property.model";

export class OrderSeller implements OrderProperty {
    type = { name: '卖方信息', selector: 'orders-seller' };

    name: string;
    identityNumber: string;
    mobile: string;
    address: string;
}
