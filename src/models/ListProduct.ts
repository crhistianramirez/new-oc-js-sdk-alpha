import { Product } from './Product';
import { Meta } from './Meta';

export interface ListProduct {
    Items?: Partial<Product>[];
    Meta?: Partial<Meta>;
}