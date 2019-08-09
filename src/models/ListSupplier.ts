import { Supplier } from './Supplier';
import { Meta } from './Meta';

export interface ListSupplier {
    Items?: Partial<Supplier>[];
    Meta?: Partial<Meta>;
}