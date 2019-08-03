import { SpecOption } from './SpecOption';

export interface BuyerSpec {
    Options: SpecOption[];
    ID: string;
    ListOrder: number;
    Name: string;
    DefaultValue: string;
    Required: boolean;
    AllowOpenText: boolean;
    DefaultOptionID: string;
    DefinesVariant: boolean;
    xp: any;
}