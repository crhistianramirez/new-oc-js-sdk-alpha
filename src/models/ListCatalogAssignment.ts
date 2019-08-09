import { CatalogAssignment } from './CatalogAssignment';
import { Meta } from './Meta';

export interface ListCatalogAssignment {
    Items?: Partial<CatalogAssignment>[];
    Meta?: Partial<Meta>;
}