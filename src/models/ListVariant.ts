import { Variant } from './Variant';
import { Meta } from './Meta';

export interface ListVariant {
    Items?: Partial<Variant>[];
    Meta?: Partial<Meta>;
}