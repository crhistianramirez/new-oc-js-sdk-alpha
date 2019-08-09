import { MessageSender } from './MessageSender';
import { Meta } from './Meta';

export interface ListMessageSender {
    Items?: Partial<MessageSender>[];
    Meta?: Partial<Meta>;
}