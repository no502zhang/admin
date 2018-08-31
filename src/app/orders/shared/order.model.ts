import { OrderProperty } from "./order-property.model";
import { OrderType } from "./order-type.model";

export interface Order {
    id: number;
    number: string;
    status: number;

    type: OrderType;

    properties: OrderProperty[];
}