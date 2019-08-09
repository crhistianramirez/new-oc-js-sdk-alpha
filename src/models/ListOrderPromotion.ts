import { OrderPromotion } from './OrderPromotion';
import { Meta } from './Meta';

export interface ListOrderPromotion {
    Items?: Partial<OrderPromotion>[];
    Meta?: Partial<Meta>;
}