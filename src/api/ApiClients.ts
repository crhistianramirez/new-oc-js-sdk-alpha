import { ListApiClient } from '../models/ListApiClient';
import { ApiClient } from '../models/ApiClient';
import { ListApiClientAssignment } from '../models/ListApiClientAssignment';
import { ApiClientAssignment } from '../models/ApiClientAssignment';
import httpClient from '../utils/httpClient';

class ApiClients {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/apiclients`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param apiClient Required fields: AccessTokenDuration, AppName
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (apiClient: ApiClient,  accessToken?: string ): Promise<Required<ApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/apiclients`, { data: apiClient, params: { accessToken, impersonating } }  );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (apiClientID: string,  accessToken?: string ): Promise<Required<ApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/apiclients/${apiClientID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param apiClient Required fields: AccessTokenDuration, AppName
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (apiClientID: string, apiClient: ApiClient,  accessToken?: string ): Promise<Required<ApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/apiclients/${apiClientID}`, { data: apiClient, params: { accessToken, impersonating } }  );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (apiClientID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/apiclients/${apiClientID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param apiClient 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (apiClientID: string, apiClient: Partial<ApiClient>,  accessToken?: string ): Promise<Required<ApiClient>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/apiclients/${apiClientID}`, { data: apiClient, params: { accessToken, impersonating } }  );
    }

   /**
    * @param options.apiClientID ID of the api client.
    * @param options.buyerID ID of the buyer.
    * @param options.supplierID ID of the supplier.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments ( options: { apiClientID?: string, buyerID?: string, supplierID?: string, page?: number, pageSize?: number } , accessToken?: string ): Promise<Required<ListApiClientAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/apiclients/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param apiClientAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment (apiClientAssignment: Partial<ApiClientAssignment>,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/apiclients/assignments`, { data: apiClientAssignment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param buyerID ID of the buyer.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteBuyerAssignment (apiClientID: string, buyerID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/buyers/${buyerID}/ApiClients/Assignments/${apiClientID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param apiClientID ID of the api client.
    * @param supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteSupplierAssignment (apiClientID: string, supplierID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/suppliers/${supplierID}/ApiClients/Assignments/${apiClientID}`, { params: { accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ApiClients.As().List() // lists ApiClients using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ApiClients();