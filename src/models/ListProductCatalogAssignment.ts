import { ProductCatalogAssignment } from './ProductCatalogAssignment';
import { Meta } from './Meta';

export interface ListProductCatalogAssignment {
    Items?: Partial<ProductCatalogAssignment>[];
    Meta?: Partial<Meta>;
}