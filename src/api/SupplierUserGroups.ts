import { ListUserGroup } from '../models/ListUserGroup';
import { UserGroup } from '../models/UserGroup';
import { ListUserGroupAssignment } from '../models/ListUserGroupAssignment';
import { UserGroupAssignment } from '../models/UserGroupAssignment';
import httpClient from '../utils/httpClient';

class SupplierUserGroups {
    private impersonating:boolean = false;

   /**
    * @param supplierID ID of the supplier.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List (supplierID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListUserGroup> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/suppliers/${supplierID}/usergroups`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userGroup 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (supplierID: string, userGroup: UserGroup,  accessToken?: string ): Promise<UserGroup> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/suppliers/${supplierID}/usergroups`, { data: userGroup, params: { accessToken, impersonating } }  );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (supplierID: string, userGroupID: string,  accessToken?: string ): Promise<UserGroup> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/suppliers/${supplierID}/usergroups/${userGroupID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param userGroup 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (supplierID: string, userGroupID: string, userGroup: UserGroup,  accessToken?: string ): Promise<UserGroup> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/suppliers/${supplierID}/usergroups/${userGroupID}`, { data: userGroup, params: { accessToken, impersonating } }  );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (supplierID: string, userGroupID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/suppliers/${supplierID}/usergroups/${userGroupID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param userGroup 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (supplierID: string, userGroupID: string, userGroup: UserGroup,  accessToken?: string ): Promise<UserGroup> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/suppliers/${supplierID}/usergroups/${userGroupID}`, { data: userGroup, params: { accessToken, impersonating } }  );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userGroupID ID of the user group.
    * @param userID ID of the user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteUserAssignment (supplierID: string, userGroupID: string, userID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/suppliers/${supplierID}/usergroups/${userGroupID}/assignments/${userID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param options.userGroupID ID of the user group.
    * @param options.userID ID of the user.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListUserAssignments (supplierID: string,  options: { userGroupID?: string, userID?: string, page?: number, pageSize?: number } , accessToken?: string ): Promise<ListUserGroupAssignment> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/suppliers/${supplierID}/usergroups/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userGroupAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveUserAssignment (supplierID: string, userGroupAssignment: UserGroupAssignment,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/suppliers/${supplierID}/usergroups/assignments`, { data: userGroupAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * SupplierUserGroups.As().List() // lists SupplierUserGroups using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new SupplierUserGroups();