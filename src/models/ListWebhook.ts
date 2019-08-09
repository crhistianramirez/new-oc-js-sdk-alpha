import { Webhook } from './Webhook';
import { Meta } from './Meta';

export interface ListWebhook {
    Items?: Partial<Webhook>[];
    Meta?: Partial<Meta>;
}