import { SecurityProfileAssignment } from './SecurityProfileAssignment';
import { Meta } from './Meta';

export interface ListSecurityProfileAssignment {
    Items?: Partial<SecurityProfileAssignment>[];
    Meta?: Partial<Meta>;
}