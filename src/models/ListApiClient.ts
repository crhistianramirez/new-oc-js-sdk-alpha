import { ApiClient } from './ApiClient';
import { Meta } from './Meta';

export interface ListApiClient {
    Items?: Partial<ApiClient>[];
    Meta?: Partial<Meta>;
}