import { Buyer } from './Buyer';
import { Meta } from './Meta';

export interface ListBuyer {
    Items?: Partial<Buyer>[];
    Meta?: Partial<Meta>;
}