import { LineItem } from './LineItem';
import { Meta } from './Meta';

export interface ListLineItem {
    Items?: Partial<LineItem>[];
    Meta?: Partial<Meta>;
}