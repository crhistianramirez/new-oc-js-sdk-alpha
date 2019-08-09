import { Promotion } from './Promotion';
import { Meta } from './Meta';

export interface ListPromotion {
    Items?: Partial<Promotion>[];
    Meta?: Partial<Meta>;
}