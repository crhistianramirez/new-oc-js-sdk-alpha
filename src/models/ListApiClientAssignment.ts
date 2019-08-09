import { ApiClientAssignment } from './ApiClientAssignment';
import { Meta } from './Meta';

export interface ListApiClientAssignment {
    Items?: Partial<ApiClientAssignment>[];
    Meta?: Partial<Meta>;
}