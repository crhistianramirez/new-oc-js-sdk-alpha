import { ListOpenIdConnect } from '../models/ListOpenIdConnect';
import { OpenIdConnect } from '../models/OpenIdConnect';
import httpClient from '../utils/httpClient';

class OpenIdConnects {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListOpenIdConnect> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/openidconnects`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param openIdConnect 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (openIdConnect: OpenIdConnect,  accessToken?: string ): Promise<OpenIdConnect> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/openidconnects`, { data: openIdConnect, params: { accessToken, impersonating } }  );
    }

   /**
    * @param openidconnectID ID of the openidconnect.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (openidconnectID: string,  accessToken?: string ): Promise<OpenIdConnect> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/openidconnects/${openidconnectID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param openidconnectID ID of the openidconnect.
    * @param openIdConnect 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (openidconnectID: string, openIdConnect: OpenIdConnect,  accessToken?: string ): Promise<OpenIdConnect> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/openidconnects/${openidconnectID}`, { data: openIdConnect, params: { accessToken, impersonating } }  );
    }

   /**
    * @param openidconnectID ID of the openidconnect.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (openidconnectID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/openidconnects/${openidconnectID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param openidconnectID ID of the openidconnect.
    * @param openIdConnect 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (openidconnectID: string, openIdConnect: OpenIdConnect,  accessToken?: string ): Promise<OpenIdConnect> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/openidconnects/${openidconnectID}`, { data: openIdConnect, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * OpenIdConnects.As().List() // lists OpenIdConnects using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new OpenIdConnects();