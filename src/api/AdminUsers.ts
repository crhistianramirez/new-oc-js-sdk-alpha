import { ListUser } from '../models/ListUser';
import { User } from '../models/User';
import httpClient from '../utils/httpClient';

class AdminUsers {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/adminusers`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (user: User,  accessToken?: string ): Promise<Required<User>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/adminusers`, { data: user, params: { accessToken, impersonating } }  );
    }

   /**
    * @param userID ID of the user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (userID: string,  accessToken?: string ): Promise<Required<User>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/adminusers/${userID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param userID ID of the user.
    * @param user Required fields: Username, FirstName, LastName, Email, Active
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (userID: string, user: User,  accessToken?: string ): Promise<Required<User>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/adminusers/${userID}`, { data: user, params: { accessToken, impersonating } }  );
    }

   /**
    * @param userID ID of the user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (userID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/adminusers/${userID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param userID ID of the user.
    * @param user 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (userID: string, user: Partial<User>,  accessToken?: string ): Promise<Required<User>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/adminusers/${userID}`, { data: user, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * AdminUsers.As().List() // lists AdminUsers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new AdminUsers();