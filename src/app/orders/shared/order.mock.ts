import { Order } from './order.model';
import { OrderBuyer } from '../order-detail/properties/shared/order-buyer.model';
import { OrderSeller } from '../order-detail/properties/shared/order-seller.model';
import { Estate } from '../order-detail/properties/shared/estate.model';
import { Remark } from '../order-detail/properties/shared/remark.model';
import { Approval } from '../order-detail/properties/shared/approval.model';
import { OrderPropertyType } from './order-property-type.model';

import { QUICK_FLOW, BONDING_REDEEM_FLOW, ADVANCE_REDEEM_FLOW } from './flow.mock';
import { OrderType } from './order-type.model';

const quickOrder: OrderType = { flow: QUICK_FLOW };
const bondingRedeem: OrderType = { flow: BONDING_REDEEM_FLOW }
const advanceRedeem: OrderType = { flow: ADVANCE_REDEEM_FLOW }

const buyerPropertyComponentInfo: OrderPropertyType = { name: '买方信息', selector: 'orders-buyer' };
const sellerPropertyComponentInfo: OrderPropertyType = { name: '卖方信息', selector: 'orders-seller' };
const estatePropertyComponentInfo: OrderPropertyType = { name: '房产信息', selector: 'orders-estate' };
const remarkPropertyComponentInfo: OrderPropertyType = { name: '交易说明', selector: 'orders-remark' };
const approvalPropertyComponentInfo: OrderPropertyType = { name: '审核情况', selector: 'orders-approval' };

const initBuyer: OrderBuyer = {
    type: buyerPropertyComponentInfo,
    name: null,
    sex: null,
    age: null,
    identityNumber: null,
    mobile: null,
    phone: null,
    email: null,
    address: null,
    marital: null,
    education: null,
    company: null,
    companyPhone: null,
    wageIncome: null,
    otherIncome: null
};
const initSeller: OrderSeller = {
    type: sellerPropertyComponentInfo,
    name: null,
    sex: null,
    age: null,
    identityNumber: null,
    mobile: null,
    phone: null,
    email: null,
    address: null,
    marital: null,
    education: null
};
const initEstate: Estate = {
    type: estatePropertyComponentInfo,
    estateNumber: null,
    address: null,
    penny: null,
    downPayments: null,
    transactionPrice: null,
    loans: null,
    loanTerm: null
};
const initRemark: Remark = {
    type: remarkPropertyComponentInfo,
    content: null
};
const initApproval: Approval = {
    type: approvalPropertyComponentInfo,
    internal: null,
    risk: null,
    manager: null
};

export const ORDER_INIT: Order = {
    id: null,
    number: null,
    status: null,

    type: quickOrder,

    properties: [initBuyer, initSeller, initEstate, initRemark]

};

/********************************************************************************************/
const buyerZhangsan: OrderBuyer = {
    type: buyerPropertyComponentInfo,
    name: '张三',
    sex: null,
    age: null,
    identityNumber: null,
    mobile: null,
    phone: null,
    email: null,
    address: null,
    marital: null,
    education: null,
    company: null,
    companyPhone: null,
    wageIncome: null,
    otherIncome: null
};
const buyerLisi: OrderBuyer = {
    type: buyerPropertyComponentInfo,
    name: '李四',
    sex: null,
    age: null,
    identityNumber: null,
    mobile: null,
    phone: null,
    email: null,
    address: null,
    marital: null,
    education: null,
    company: null,
    companyPhone: null,
    wageIncome: null,
    otherIncome: null
};
const buyerWangwu: OrderBuyer = {
    type: buyerPropertyComponentInfo,
    name: '王五',
    sex: null,
    age: null,
    identityNumber: null,
    mobile: null,
    phone: null,
    email: null,
    address: null,
    marital: null,
    education: null,
    company: null,
    companyPhone: null,
    wageIncome: null,
    otherIncome: null
};
const sellerLisi: OrderSeller = {
    type: sellerPropertyComponentInfo,
    name: '李四',
    sex: null,
    age: null,
    identityNumber: null,
    mobile: null,
    phone: null,
    email: null,
    address: null,
    marital: null,
    education: null
};
const sellerWangwu: OrderSeller = {
    type: sellerPropertyComponentInfo,
    name: '王五',
    sex: null,
    age: null,
    identityNumber: null,
    mobile: null,
    phone: null,
    email: null,
    address: null,
    marital: null,
    education: null
};
const dongguanEstate: Estate = {
    type: estatePropertyComponentInfo,
    estateNumber: 'S12345',
    address: '东莞市',
    penny: null,
    downPayments: null,
    transactionPrice: null,
    loans: null,
    loanTerm: null
};
const guangzhouEstate: Estate = {
    type: estatePropertyComponentInfo,
    estateNumber: 'A12345',
    address: '广州市',
    penny: null,
    downPayments: null,
    transactionPrice: null,
    loans: null,
    loanTerm: null
};
const nullRemark: Remark = {
    type: remarkPropertyComponentInfo,
    content: null
};

export const ORDERS: Order[] = [
    {
        id: 1,
        number: '20180627001',
        status: 1,

        type: quickOrder,

        properties: [buyerZhangsan, sellerLisi, dongguanEstate]
    },
    {
        id: 2,
        number: '20180627002',
        status: 2,

        type: quickOrder,

        properties: [buyerZhangsan, sellerLisi, guangzhouEstate, nullRemark]
    },
    {
        id: 3,
        number: '20180627003',
        status: 2,

        type: bondingRedeem,

        properties: [buyerLisi, sellerWangwu, guangzhouEstate, nullRemark]
    },
    {
        id: 4,
        number: '20180627004',
        status: 2,

        type: advanceRedeem,

        properties: [buyerWangwu, sellerLisi, dongguanEstate, nullRemark, initApproval]
    }
];