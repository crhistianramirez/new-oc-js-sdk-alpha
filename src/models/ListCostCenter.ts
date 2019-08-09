import { CostCenter } from './CostCenter';
import { Meta } from './Meta';

export interface ListCostCenter {
    Items?: Partial<CostCenter>[];
    Meta?: Partial<Meta>;
}