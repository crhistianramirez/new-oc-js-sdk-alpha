import { Order } from './Order';
import { Meta } from './Meta';

export interface ListOrder {
    Items?: Partial<Order>[];
    Meta?: Partial<Meta>;
}