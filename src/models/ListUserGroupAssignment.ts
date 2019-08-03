import { UserGroupAssignment } from './UserGroupAssignment';
import { Meta } from './Meta';

export interface ListUserGroupAssignment {
    Items: UserGroupAssignment[];
    Meta: Meta;
}