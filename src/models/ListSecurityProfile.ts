import { SecurityProfile } from './SecurityProfile';
import { Meta } from './Meta';

export interface ListSecurityProfile {
    Items?: Partial<SecurityProfile>[];
    Meta?: Partial<Meta>;
}