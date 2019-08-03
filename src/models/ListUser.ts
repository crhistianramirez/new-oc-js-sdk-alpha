import { User } from './User';
import { Meta } from './Meta';

export interface ListUser {
    Items: User[];
    Meta: Meta;
}