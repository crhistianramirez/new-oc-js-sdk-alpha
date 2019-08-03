import { Shipment } from './Shipment';
import { Meta } from './Meta';

export interface ListShipment {
    Items: Shipment[];
    Meta: Meta;
}