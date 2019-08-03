import { Inventory } from './Inventory';

export interface Product {
    DefaultPriceScheduleID: string;
    ID: string;
    Name: string;
    Description: string;
    QuantityMultiplier: number;
    ShipWeight: number;
    ShipHeight: number;
    ShipWidth: number;
    ShipLength: number;
    Active: boolean;
    SpecCount: number;
    xp: any;
    VariantCount: number;
    ShipFromAddressID: string;
    Inventory: Inventory;
    DefaultSupplierID: string;
}