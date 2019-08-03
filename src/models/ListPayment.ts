import { Payment } from './Payment';
import { Meta } from './Meta';

export interface ListPayment {
    Items: Payment[];
    Meta: Meta;
}