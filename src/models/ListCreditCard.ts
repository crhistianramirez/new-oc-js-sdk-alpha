import { CreditCard } from './CreditCard';
import { Meta } from './Meta';

export interface ListCreditCard {
    Items?: Partial<CreditCard>[];
    Meta?: Partial<Meta>;
}