import { Order } from './Order';
import { Meta } from './Meta';

export interface ListOrder {
    Items: Order[];
    Meta: Meta;
}