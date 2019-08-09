import { Payment } from './Payment';
import { Meta } from './Meta';

export interface ListPayment {
    Items?: Partial<Payment>[];
    Meta?: Partial<Meta>;
}