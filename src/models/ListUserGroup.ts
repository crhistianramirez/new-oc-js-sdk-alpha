import { UserGroup } from './UserGroup';
import { Meta } from './Meta';

export interface ListUserGroup {
    Items?: Partial<UserGroup>[];
    Meta?: Partial<Meta>;
}