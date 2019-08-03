
export interface ApiClient {
    ID: string;
    ClientSecret: string;
    AccessTokenDuration: number;
    Active: boolean;
    AppName: string;
    RefreshTokenDuration: number;
    DefaultContextUserName: string;
    xp: any;
    AllowAnyBuyer: boolean;
    AllowAnySupplier: boolean;
    AllowSeller: boolean;
    IsAnonBuyer: boolean;
    AssignedBuyerCount: number;
    AssignedSupplierCount: number;
}