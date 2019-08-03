import { SecurityProfile } from './SecurityProfile';
import { Meta } from './Meta';

export interface ListSecurityProfile {
    Items: SecurityProfile[];
    Meta: Meta;
}