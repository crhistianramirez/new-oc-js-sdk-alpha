import { PriceSchedule } from './PriceSchedule';
import { Meta } from './Meta';

export interface ListPriceSchedule {
    Items: PriceSchedule[];
    Meta: Meta;
}