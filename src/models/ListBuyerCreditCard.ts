import { BuyerCreditCard } from './BuyerCreditCard';
import { Meta } from './Meta';

export interface ListBuyerCreditCard {
    Items?: Partial<BuyerCreditCard>[];
    Meta?: Partial<Meta>;
}