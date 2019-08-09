import { VariantInventory } from './VariantInventory';

export interface Variant {
    ID?: string;
    Name?: string;
    Description?: string;
    Active?: boolean;
    ShipWeight?: number;
    ShipHeight?: number;
    ShipWidth?: number;
    ShipLength?: number;
    Inventory?: Partial<VariantInventory>;
    xp?: any;
}