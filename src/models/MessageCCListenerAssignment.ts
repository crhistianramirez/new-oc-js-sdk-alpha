import { MessageSenderAssignment } from './MessageSenderAssignment';

export interface MessageCCListenerAssignment {
    MessageSenderAssignment: MessageSenderAssignment;
    MessageConfigName: string;
    MessageConfigDescription: string;
    MessageType: 'OrderDeclined' | 'OrderSubmitted' | 'ShipmentCreated' | 'ForgottenPassword' | 'OrderSubmittedForYourApproval' | 'OrderSubmittedForApproval' | 'OrderApproved' | 'OrderSubmittedForYourApprovalHasBeenApproved' | 'OrderSubmittedForYourApprovalHasBeenDeclined' | 'NewUserInvitation';
    BuyerID: string;
    SupplierID: string;
    UserGroupID: string;
    UserID: string;
}