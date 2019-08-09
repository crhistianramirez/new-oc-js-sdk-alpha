import { Catalog } from './Catalog';
import { Meta } from './Meta';

export interface ListCatalog {
    Items?: Partial<Catalog>[];
    Meta?: Partial<Meta>;
}