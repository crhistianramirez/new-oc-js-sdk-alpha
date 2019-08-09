import { User } from './User';
import { Meta } from './Meta';

export interface ListUser {
    Items?: Partial<User>[];
    Meta?: Partial<Meta>;
}