import { Catalog } from './Catalog';
import { Meta } from './Meta';

export interface ListCatalog {
    Items: Catalog[];
    Meta: Meta;
}