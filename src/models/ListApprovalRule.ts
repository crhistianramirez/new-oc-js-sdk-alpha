import { ApprovalRule } from './ApprovalRule';
import { Meta } from './Meta';

export interface ListApprovalRule {
    Items: ApprovalRule[];
    Meta: Meta;
}