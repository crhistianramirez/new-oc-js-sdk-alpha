import { ApprovalRule } from './ApprovalRule';
import { Meta } from './Meta';

export interface ListApprovalRule {
    Items?: Partial<ApprovalRule>[];
    Meta?: Partial<Meta>;
}