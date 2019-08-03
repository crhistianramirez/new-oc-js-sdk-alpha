import { ProductCatalogAssignment } from './ProductCatalogAssignment';
import { Meta } from './Meta';

export interface ListProductCatalogAssignment {
    Items: ProductCatalogAssignment[];
    Meta: Meta;
}