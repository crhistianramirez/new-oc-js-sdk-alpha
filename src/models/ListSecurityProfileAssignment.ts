import { SecurityProfileAssignment } from './SecurityProfileAssignment';
import { Meta } from './Meta';

export interface ListSecurityProfileAssignment {
    Items: SecurityProfileAssignment[];
    Meta: Meta;
}