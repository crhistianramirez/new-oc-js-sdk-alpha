import { SpecProductAssignment } from './SpecProductAssignment';
import { Meta } from './Meta';

export interface ListSpecProductAssignment {
    Items?: Partial<SpecProductAssignment>[];
    Meta?: Partial<Meta>;
}