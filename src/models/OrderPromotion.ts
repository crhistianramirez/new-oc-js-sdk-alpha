
export interface OrderPromotion {
    Amount: number;
    ID: string;
    Code: string;
    Name: string;
    RedemptionLimit: number;
    RedemptionLimitPerUser: number;
    RedemptionCount: number;
    Description: string;
    FinePrint: string;
    StartDate: string;
    ExpirationDate: string;
    EligibleExpression: string;
    ValueExpression: string;
    CanCombine: boolean;
    AllowAllBuyers: boolean;
    xp: any;
}