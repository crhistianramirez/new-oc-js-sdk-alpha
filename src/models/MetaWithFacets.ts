import { ListFacet } from './ListFacet';

export interface MetaWithFacets {
    Facets?: Partial<ListFacet>[];
    Page?: number;
    PageSize?: number;
    TotalCount?: number;
    TotalPages?: number;
    ItemRange?: number[];
}