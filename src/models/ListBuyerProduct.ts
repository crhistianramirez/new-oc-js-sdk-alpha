import { BuyerProduct } from './BuyerProduct';
import { MetaWithFacets } from './MetaWithFacets';

export interface ListBuyerProduct {
    Items?: Partial<BuyerProduct>[];
    Meta?: Partial<MetaWithFacets>;
}