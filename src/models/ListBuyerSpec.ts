import { BuyerSpec } from './BuyerSpec';
import { Meta } from './Meta';

export interface ListBuyerSpec {
    Items?: Partial<BuyerSpec>[];
    Meta?: Partial<Meta>;
}