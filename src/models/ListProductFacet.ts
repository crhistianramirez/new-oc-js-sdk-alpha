import { ProductFacet } from './ProductFacet';
import { Meta } from './Meta';

export interface ListProductFacet {
    Items?: Partial<ProductFacet>[];
    Meta?: Partial<Meta>;
}