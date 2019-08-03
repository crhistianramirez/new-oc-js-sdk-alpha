import { ApiClient } from './ApiClient';
import { Meta } from './Meta';

export interface ListApiClient {
    Items: ApiClient[];
    Meta: Meta;
}