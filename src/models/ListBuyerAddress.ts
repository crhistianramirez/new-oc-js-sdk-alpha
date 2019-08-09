import { BuyerAddress } from './BuyerAddress';
import { Meta } from './Meta';

export interface ListBuyerAddress {
    Items?: Partial<BuyerAddress>[];
    Meta?: Partial<Meta>;
}