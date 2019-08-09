import { Spec } from './Spec';
import { Meta } from './Meta';

export interface ListSpec {
    Items?: Partial<Spec>[];
    Meta?: Partial<Meta>;
}