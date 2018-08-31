import { OrderProperty } from "../../../shared/order-property.model";

export class OrderBuyer implements OrderProperty {
    type = { name: '买方信息', selector: 'orders-buyer' };

    name: string;
    identityNumber: string;
    mobile: string;
    address: string;
}
