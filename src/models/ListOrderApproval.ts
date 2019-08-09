import { OrderApproval } from './OrderApproval';
import { Meta } from './Meta';

export interface ListOrderApproval {
    Items?: Partial<OrderApproval>[];
    Meta?: Partial<Meta>;
}