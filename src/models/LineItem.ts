import { LineItemProduct } from './LineItemProduct';
import { LineItemVariant } from './LineItemVariant';
import { Address } from './Address';
import { LineItemSpec } from './LineItemSpec';

export interface LineItem {
    ID?: string;
    ProductID: string;
    Quantity: number;
    DateAdded?: string;
    QuantityShipped?: number;
    UnitPrice?: number;
    LineTotal?: number;
    CostCenter?: string;
    DateNeeded?: string;
    ShippingAccount?: string;
    ShippingAddressID?: string;
    ShipFromAddressID?: string;
    Product?: Partial<LineItemProduct>;
    Variant?: Partial<LineItemVariant>;
    ShippingAddress?: Partial<Address>;
    ShipFromAddress?: Partial<Address>;
    SupplierID?: string;
    Specs?: Partial<LineItemSpec>[];
    xp?: any;
}