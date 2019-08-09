import { PriceSchedule } from './PriceSchedule';
import { Inventory } from './Inventory';

export interface BuyerProduct {
    PriceSchedule?: Partial<PriceSchedule>;
    ID?: string;
    Name?: string;
    Description?: string;
    QuantityMultiplier?: number;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    Active?: boolean;
    SpecCount?: number;
    xp?: any;
    VariantCount?: number;
    ShipFromAddressID?: string;
    Inventory?: Partial<Inventory>;
    DefaultSupplierID?: string;
}