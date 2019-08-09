import { XpIndex } from './XpIndex';
import { Meta } from './Meta';

export interface ListXpIndex {
    Items?: Partial<XpIndex>[];
    Meta?: Partial<Meta>;
}