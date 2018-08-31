import { OrderProperty } from "../../../shared/order-property.model";

export class Estate implements OrderProperty {
    type = { name: '房产信息', selector: 'orders-estate' };

    certificateNumber: string;
    position: string;
}
