import { CreditCardAssignment } from './CreditCardAssignment';
import { Meta } from './Meta';

export interface ListCreditCardAssignment {
    Items?: Partial<CreditCardAssignment>[];
    Meta?: Partial<Meta>;
}