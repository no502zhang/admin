export interface FlowNode {
    name: string;
    description: string;
}

export interface Flow {
    nodes: FlowNode[];
}