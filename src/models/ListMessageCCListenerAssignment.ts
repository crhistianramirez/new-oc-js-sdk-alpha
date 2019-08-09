import { MessageCCListenerAssignment } from './MessageCCListenerAssignment';
import { Meta } from './Meta';

export interface ListMessageCCListenerAssignment {
    Items?: Partial<MessageCCListenerAssignment>[];
    Meta?: Partial<Meta>;
}