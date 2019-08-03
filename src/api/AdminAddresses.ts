import { ListAddress } from '../models/ListAddress';
import { Address } from '../models/Address';
import httpClient from '../utils/httpClient';

class AdminAddresses {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListAddress> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/addresses`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (address: Address,  accessToken?: string ): Promise<Address> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/addresses`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param addressID ID of the address.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (addressID: string,  accessToken?: string ): Promise<Address> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/addresses/${addressID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param addressID ID of the address.
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (addressID: string, address: Address,  accessToken?: string ): Promise<Address> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/addresses/${addressID}`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param addressID ID of the address.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (addressID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/addresses/${addressID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param addressID ID of the address.
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (addressID: string, address: Address,  accessToken?: string ): Promise<Address> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/addresses/${addressID}`, { data: address, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * AdminAddresses.As().List() // lists AdminAddresses using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new AdminAddresses();