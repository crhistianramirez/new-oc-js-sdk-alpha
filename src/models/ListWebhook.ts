import { Webhook } from './Webhook';
import { Meta } from './Meta';

export interface ListWebhook {
    Items: Webhook[];
    Meta: Meta;
}