import { User } from './User';
import { Address } from './Address';

export interface Order {
    ID?: string;
    FromUser?: Partial<User>;
    FromCompanyID?: string;
    FromUserID?: string;
    BillingAddressID?: string;
    BillingAddress?: Partial<Address>;
    ShippingAddressID?: string;
    Comments?: string;
    LineItemCount?: number;
    Status?: 'Unsubmitted' | 'AwaitingApproval' | 'Declined' | 'Open' | 'Completed' | 'Canceled';
    DateCreated?: string;
    DateSubmitted?: string;
    DateApproved?: string;
    DateDeclined?: string;
    DateCanceled?: string;
    DateCompleted?: string;
    Subtotal?: number;
    ShippingCost?: number;
    TaxCost?: number;
    PromotionDiscount?: number;
    Total?: number;
    IsSubmitted?: boolean;
    xp?: any;
}