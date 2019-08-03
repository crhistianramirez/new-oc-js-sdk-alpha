import { Product } from './Product';
import { Meta } from './Meta';

export interface ListProduct {
    Items: Product[];
    Meta: Meta;
}