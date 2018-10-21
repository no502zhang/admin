import { OrderProperty } from "../../../shared/order-property.model";

export class Estate implements OrderProperty {
    type = { name: '房产信息', selector: 'orders-estate' };

    estateNumber: string;
    address: string;

    penny: number;
    downPayments: number;
    transactionPrice: number;
    loans: number;
    loanTerm: number;
}
