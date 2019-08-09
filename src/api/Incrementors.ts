import { ListIncrementor } from '../models/ListIncrementor';
import { Incrementor } from '../models/Incrementor';
import httpClient from '../utils/httpClient';

class Incrementors {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListIncrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/incrementors`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param incrementor Required fields: LastNumber, LeftPaddingCount
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (incrementor: Incrementor,  accessToken?: string ): Promise<Required<Incrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/incrementors`, { data: incrementor, params: { accessToken, impersonating } }  );
    }

   /**
    * @param incrementorID ID of the incrementor.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (incrementorID: string,  accessToken?: string ): Promise<Required<Incrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/incrementors/${incrementorID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param incrementorID ID of the incrementor.
    * @param incrementor Required fields: LastNumber, LeftPaddingCount
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (incrementorID: string, incrementor: Incrementor,  accessToken?: string ): Promise<Required<Incrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/incrementors/${incrementorID}`, { data: incrementor, params: { accessToken, impersonating } }  );
    }

   /**
    * @param incrementorID ID of the incrementor.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (incrementorID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/incrementors/${incrementorID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param incrementorID ID of the incrementor.
    * @param incrementor 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (incrementorID: string, incrementor: Partial<Incrementor>,  accessToken?: string ): Promise<Required<Incrementor>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/incrementors/${incrementorID}`, { data: incrementor, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Incrementors.As().List() // lists Incrementors using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Incrementors();