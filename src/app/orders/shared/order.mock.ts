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
    name: '',
    identityNumber: '',
    mobile: '',
    address: ''
};
const initSeller: OrderSeller = {
    type: sellerPropertyComponentInfo,
    name: '',
    identityNumber: '',
    mobile: '',
    address: ''
};
const initEstate: Estate = {
    type: estatePropertyComponentInfo,
    certificateNumber: '', position: ''
};
const initRemark: Remark = {
    type: remarkPropertyComponentInfo,
    content: ''
};
const initApproval: Approval = {
    type: approvalPropertyComponentInfo,
    internal: '',
    risk: '',
    manager: ''
};

export const ORDER_INIT: Order = {
    id: 0,
    number: '',
    status: 0,

    type: quickOrder,

    properties: [initBuyer, initSeller, initEstate, initRemark]

};

/********************************************************************************************/
const buyerZhangsan: OrderBuyer = {
    type: buyerPropertyComponentInfo,
    name: '张三',
    identityNumber: '',
    mobile: '',
    address: ''
};
const buyerLisi: OrderBuyer = {
    type: buyerPropertyComponentInfo,
    name: '李四',
    identityNumber: '',
    mobile: '',
    address: ''
};
const buyerWangwu: OrderBuyer = {
    type: buyerPropertyComponentInfo,
    name: '王五',
    identityNumber: '',
    mobile: '',
    address: ''
};
const sellerLisi: OrderSeller = {
    type: sellerPropertyComponentInfo,
    name: '李四',
    identityNumber: '',
    mobile: '',
    address: ''
};
const sellerWangwu: OrderSeller = {
    type: sellerPropertyComponentInfo,
    name: '王五',
    identityNumber: '',
    mobile: '',
    address: ''
};
const dongguanEstate: Estate = {
    type: estatePropertyComponentInfo,
    certificateNumber: 'S12345', position: '东莞市'
};
const guangzhouEstate: Estate = {
    type: estatePropertyComponentInfo,
    certificateNumber: 'A12345', position: '广州市'
};
const nullRemark: Remark = {
    type: remarkPropertyComponentInfo,
    content: ''
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