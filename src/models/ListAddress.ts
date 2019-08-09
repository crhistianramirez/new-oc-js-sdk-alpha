import { Address } from './Address';
import { Meta } from './Meta';

export interface ListAddress {
    Items?: Partial<Address>[];
    Meta?: Partial<Meta>;
}