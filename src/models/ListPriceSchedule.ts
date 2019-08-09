import { PriceSchedule } from './PriceSchedule';
import { Meta } from './Meta';

export interface ListPriceSchedule {
    Items?: Partial<PriceSchedule>[];
    Meta?: Partial<Meta>;
}