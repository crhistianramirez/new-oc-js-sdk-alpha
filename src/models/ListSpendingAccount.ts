import { SpendingAccount } from './SpendingAccount';
import { Meta } from './Meta';

export interface ListSpendingAccount {
    Items: SpendingAccount[];
    Meta: Meta;
}