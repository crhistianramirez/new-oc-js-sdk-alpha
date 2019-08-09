import { MessageSenderAssignment } from './MessageSenderAssignment';
import { Meta } from './Meta';

export interface ListMessageSenderAssignment {
    Items?: Partial<MessageSenderAssignment>[];
    Meta?: Partial<Meta>;
}