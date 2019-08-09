import { ShipmentItem } from './ShipmentItem';
import { Meta } from './Meta';

export interface ListShipmentItem {
    Items?: Partial<ShipmentItem>[];
    Meta?: Partial<Meta>;
}