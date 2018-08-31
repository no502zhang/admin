import { OrderProperty } from "../../../shared/order-property.model";

export class Approval implements OrderProperty {
    type = { name: '审核情况', selector: 'orders-approval' };

    internal: string;
    risk: string;
    manager: string;
}
