import { SpendingAccountAssignment } from './SpendingAccountAssignment';
import { Meta } from './Meta';

export interface ListSpendingAccountAssignment {
    Items?: Partial<SpendingAccountAssignment>[];
    Meta?: Partial<Meta>;
}