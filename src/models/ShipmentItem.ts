import { LineItemProduct } from './LineItemProduct';
import { LineItemVariant } from './LineItemVariant';
import { LineItemSpec } from './LineItemSpec';

export interface ShipmentItem {
    OrderID: string;
    LineItemID: string;
    QuantityShipped: number;
    UnitPrice: number;
    CostCenter: string;
    DateNeeded: string;
    Product: LineItemProduct;
    Variant: LineItemVariant;
    Specs: LineItemSpec[];
    xp: any;
}