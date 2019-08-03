import { ListUserGroup } from '../models/ListUserGroup';
import { UserGroup } from '../models/UserGroup';
import { ListUserGroupAssignment } from '../models/ListUserGroupAssignment';
import { UserGroupAssignment } from '../models/UserGroupAssignment';
import httpClient from '../utils/httpClient';

class AdminUserGroups {
    private impersonating:boolean = false;

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListUserGroup> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/usergroups`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param userGroup 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (userGroup: UserGroup,  accessToken?: string ): Promise<UserGroup> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/usergroups`, { data: userGroup, params: { accessToken, impersonating } }  );
    }

   /**
    * @param userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (userGroupID: string,  accessToken?: string ): Promise<UserGroup> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/usergroups/${userGroupID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param userGroupID ID of the user group.
    * @param userGroup 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (userGroupID: string, userGroup: UserGroup,  accessToken?: string ): Promise<UserGroup> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/usergroups/${userGroupID}`, { data: userGroup, params: { accessToken, impersonating } }  );
    }

   /**
    * @param userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (userGroupID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/usergroups/${userGroupID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param userGroupID ID of the user group.
    * @param userGroup 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (userGroupID: string, userGroup: UserGroup,  accessToken?: string ): Promise<UserGroup> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/usergroups/${userGroupID}`, { data: userGroup, params: { accessToken, impersonating } }  );
    }

   /**
    * @param userGroupID ID of the user group.
    * @param userID ID of the user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteUserAssignment (userGroupID: string, userID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/usergroups/${userGroupID}/assignments/${userID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param options.userGroupID ID of the user group.
    * @param options.userID ID of the user.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListUserAssignments ( options: { userGroupID?: string, userID?: string, page?: number, pageSize?: number } , accessToken?: string ): Promise<ListUserGroupAssignment> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/usergroups/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param userGroupAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveUserAssignment (userGroupAssignment: UserGroupAssignment,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/usergroups/assignments`, { data: userGroupAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * AdminUserGroups.As().List() // lists AdminUserGroups using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new AdminUserGroups();