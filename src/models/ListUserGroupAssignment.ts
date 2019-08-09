import { UserGroupAssignment } from './UserGroupAssignment';
import { Meta } from './Meta';

export interface ListUserGroupAssignment {
    Items?: Partial<UserGroupAssignment>[];
    Meta?: Partial<Meta>;
}