import { User } from './User';

export interface OrderApproval {
    ApprovalRuleID: string;
    ApprovingGroupID: string;
    Status: 'Pending' | 'Approved' | 'Declined';
    AllowResubmit: boolean;
    DateCreated: string;
    DateCompleted: string;
    Approver: User;
    Comments: string;
}