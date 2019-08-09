import { ListImpersonationConfig } from '../models/ListImpersonationConfig';
import { ImpersonationConfig } from '../models/ImpersonationConfig';
import httpClient from '../utils/httpClient';

class ImpersonationConfigs {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/impersonationconfig`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param impersonationConfig Required fields: BuyerID, SecurityProfileID, ClientID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (impersonationConfig: ImpersonationConfig,  accessToken?: string ): Promise<Required<ImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/impersonationconfig`, { data: impersonationConfig, params: { accessToken, impersonating } }  );
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (impersonationConfigID: string,  accessToken?: string ): Promise<Required<ImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/impersonationconfig/${impersonationConfigID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param impersonationConfig Required fields: BuyerID, SecurityProfileID, ClientID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (impersonationConfigID: string, impersonationConfig: ImpersonationConfig,  accessToken?: string ): Promise<Required<ImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/impersonationconfig/${impersonationConfigID}`, { data: impersonationConfig, params: { accessToken, impersonating } }  );
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (impersonationConfigID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/impersonationconfig/${impersonationConfigID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param impersonationConfigID ID of the impersonation config.
    * @param impersonationConfig 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (impersonationConfigID: string, impersonationConfig: Partial<ImpersonationConfig>,  accessToken?: string ): Promise<Required<ImpersonationConfig>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/impersonationconfig/${impersonationConfigID}`, { data: impersonationConfig, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ImpersonationConfigs.As().List() // lists ImpersonationConfigs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ImpersonationConfigs();