
export interface Category {
    ID?: string;
    Name?: string;
    Description?: string;
    ListOrder?: number;
    Active?: boolean;
    ParentID?: string;
    ChildCount?: number;
    xp?: any;
}