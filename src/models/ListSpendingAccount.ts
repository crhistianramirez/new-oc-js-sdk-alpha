import { SpendingAccount } from './SpendingAccount';
import { Meta } from './Meta';

export interface ListSpendingAccount {
    Items?: Partial<SpendingAccount>[];
    Meta?: Partial<Meta>;
}