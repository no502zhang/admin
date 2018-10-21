import { OrderProperty } from "../../../shared/order-property.model";

export class OrderSeller implements OrderProperty {
    type = { name: '卖方信息', selector: 'orders-seller' };

    name: string;
    sex: string;
    age: number;

    identityNumber: string;
    mobile: string;
    phone: string;
    email: string;
    address: string;

    marital: string;
    education: string;
}
