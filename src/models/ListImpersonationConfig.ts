import { ImpersonationConfig } from './ImpersonationConfig';
import { Meta } from './Meta';

export interface ListImpersonationConfig {
    Items?: Partial<ImpersonationConfig>[];
    Meta?: Partial<Meta>;
}