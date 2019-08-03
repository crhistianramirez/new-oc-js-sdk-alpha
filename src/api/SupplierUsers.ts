import { ListUser } from '../models/ListUser';
import { User } from '../models/User';
import { ImpersonateTokenRequest } from '../models/ImpersonateTokenRequest';
import { AccessToken } from '../models/AccessToken';
import httpClient from '../utils/httpClient';

class SupplierUsers {
    private impersonating:boolean = false;

   /**
    * @param supplierID ID of the supplier.
    * @param options.userGroupID ID of the user group.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List (supplierID: string,  options: { userGroupID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListUser> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/suppliers/${supplierID}/users`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param user 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (supplierID: string, user: User,  accessToken?: string ): Promise<User> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/suppliers/${supplierID}/users`, { data: user, params: { accessToken, impersonating } }  );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (supplierID: string, userID: string,  accessToken?: string ): Promise<User> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/suppliers/${supplierID}/users/${userID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param user 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (supplierID: string, userID: string, user: User,  accessToken?: string ): Promise<User> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/suppliers/${supplierID}/users/${userID}`, { data: user, params: { accessToken, impersonating } }  );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (supplierID: string, userID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/suppliers/${supplierID}/users/${userID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param user 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (supplierID: string, userID: string, user: User,  accessToken?: string ): Promise<User> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/suppliers/${supplierID}/users/${userID}`, { data: user, params: { accessToken, impersonating } }  );
    }

   /**
    * @param supplierID ID of the supplier.
    * @param userID ID of the user.
    * @param impersonateTokenRequest 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetAccessToken (supplierID: string, userID: string, impersonateTokenRequest: ImpersonateTokenRequest,  accessToken?: string ): Promise<AccessToken> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/suppliers/${supplierID}/users/${userID}/accesstoken`, { data: impersonateTokenRequest, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * SupplierUsers.As().List() // lists SupplierUsers using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new SupplierUsers();