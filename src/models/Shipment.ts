import { Address } from './Address';

export interface Shipment {
    ID: string;
    BuyerID: string;
    Shipper: string;
    DateShipped: string;
    DateDelivered: string;
    TrackingNumber: string;
    Cost: number;
    xp: any;
    Account: string;
    FromAddressID: string;
    ToAddressID: string;
    FromAddress: Address;
    ToAddress: Address;
}