import { Shipment } from './Shipment';
import { Meta } from './Meta';

export interface ListShipment {
    Items?: Partial<Shipment>[];
    Meta?: Partial<Meta>;
}