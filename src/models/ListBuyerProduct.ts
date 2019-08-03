import { BuyerProduct } from './BuyerProduct';
import { MetaWithFacets } from './MetaWithFacets';

export interface ListBuyerProduct {
    Items: BuyerProduct[];
    Meta: MetaWithFacets;
}