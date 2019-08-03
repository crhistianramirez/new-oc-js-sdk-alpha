import { MessageSender } from './MessageSender';
import { Meta } from './Meta';

export interface ListMessageSender {
    Items: MessageSender[];
    Meta: Meta;
}