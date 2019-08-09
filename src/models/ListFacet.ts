import { ListFacetValue } from './ListFacetValue';

export interface ListFacet {
    Name?: string;
    XpPath?: string;
    Values?: Partial<ListFacetValue>[];
    xp?: any;
}