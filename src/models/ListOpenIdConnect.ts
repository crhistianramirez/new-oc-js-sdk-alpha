import { OpenIdConnect } from './OpenIdConnect';
import { Meta } from './Meta';

export interface ListOpenIdConnect {
    Items?: Partial<OpenIdConnect>[];
    Meta?: Partial<Meta>;
}