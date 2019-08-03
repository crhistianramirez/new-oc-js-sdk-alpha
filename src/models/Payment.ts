import { PaymentTransaction } from './PaymentTransaction';

export interface Payment {
    ID: string;
    Type: 'PurchaseOrder' | 'CreditCard' | 'SpendingAccount';
    DateCreated: string;
    CreditCardID: string;
    SpendingAccountID: string;
    Description: string;
    Amount: number;
    Accepted: boolean;
    xp: any;
    Transactions: PaymentTransaction[];
}