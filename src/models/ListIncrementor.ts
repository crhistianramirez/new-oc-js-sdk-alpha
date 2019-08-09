import { Incrementor } from './Incrementor';
import { Meta } from './Meta';

export interface ListIncrementor {
    Items?: Partial<Incrementor>[];
    Meta?: Partial<Meta>;
}