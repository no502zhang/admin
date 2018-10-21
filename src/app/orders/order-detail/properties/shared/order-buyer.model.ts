import { OrderProperty } from "../../../shared/order-property.model";

export class OrderBuyer implements OrderProperty {
    type = { name: '买方信息', selector: 'orders-buyer' };

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

    company: string;
    companyPhone: string;

    wageIncome: number;
    otherIncome: number;
}
