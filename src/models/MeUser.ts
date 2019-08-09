import { MeBuyer } from './MeBuyer';
import { MeSupplier } from './MeSupplier';

export interface MeUser {
    Buyer?: Partial<MeBuyer>;
    Supplier?: Partial<MeSupplier>;
    ID?: string;
    Username?: string;
    Password?: string;
    FirstName?: string;
    LastName?: string;
    Email?: string;
    Phone?: string;
    TermsAccepted?: string;
    Active?: boolean;
    xp?: any;
    AvailableRoles?: string[];
    DateCreated?: string;
    PasswordLastSetDate?: string;
}