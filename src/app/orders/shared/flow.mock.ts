import { Flow, FlowNode } from "./flow.model";

const startNode: FlowNode = { name: '申请', description: '基础信息录入' };
const companyApproveNode: FlowNode = { name: '公司审核', description: '检查资料' };
const applyLoanNode: FlowNode = { name: '申请贷款', description: '签署按揭合同' };
const bankApproveNode: FlowNode = { name: '银行审批', description: '跟进同贷进度' };
const collectNode: FlowNode = { name: '收原件', description: '收原件' };
const transferNode: FlowNode = { name: '办证过户', description: '办证过户' };
const payeeNode: FlowNode = { name: '卖家收款', description: '放款申请' };
const impawnNode: FlowNode = { name: '抵押登记', description: '抵押登记' };
const doneNode: FlowNode = { name: '结案', description: '结案' };
const bondingNode: FlowNode = { name: '担保赎楼', description: '担保赎楼' }
const advanceNode: FlowNode = { name: '垫资赎楼', description: '垫资赎楼' }

export const QUICK_FLOW: Flow = {
    nodes: [
        startNode,
        companyApproveNode,
        applyLoanNode,
        bankApproveNode,
        collectNode,
        transferNode,
        payeeNode,
        impawnNode,
        doneNode,
    ]
};

export const BONDING_REDEEM_FLOW: Flow = {
    nodes: [
        startNode,
        companyApproveNode,
        applyLoanNode,
        bankApproveNode,
        collectNode,
        bondingNode,
        transferNode,
        payeeNode,
        impawnNode,
        doneNode
    ]
};

export const ADVANCE_REDEEM_FLOW: Flow = {
    nodes: [
        startNode,
        companyApproveNode,
        applyLoanNode,
        bankApproveNode,
        collectNode,
        advanceNode,
        transferNode,
        payeeNode,
        impawnNode,
        doneNode,
    ]
};