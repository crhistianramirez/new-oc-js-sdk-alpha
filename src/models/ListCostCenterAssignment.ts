import { CostCenterAssignment } from './CostCenterAssignment';
import { Meta } from './Meta';

export interface ListCostCenterAssignment {
    Items?: Partial<CostCenterAssignment>[];
    Meta?: Partial<Meta>;
}