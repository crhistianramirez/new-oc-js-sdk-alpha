import { SpecOption } from './SpecOption';
import { Meta } from './Meta';

export interface ListSpecOption {
    Items?: Partial<SpecOption>[];
    Meta?: Partial<Meta>;
}