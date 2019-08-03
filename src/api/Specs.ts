import { ListSpec } from '../models/ListSpec';
import { Spec } from '../models/Spec';
import { ListSpecOption } from '../models/ListSpecOption';
import { SpecOption } from '../models/SpecOption';
import { ListSpecProductAssignment } from '../models/ListSpecProductAssignment';
import { SpecProductAssignment } from '../models/SpecProductAssignment';
import httpClient from '../utils/httpClient';

class Specs {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListSpec> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/specs`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param spec 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (spec: Spec,  accessToken?: string ): Promise<Spec> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/specs`, { data: spec, params: { accessToken, impersonating } }  );
    }

   /**
    * @param specID ID of the spec.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (specID: string,  accessToken?: string ): Promise<Spec> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/specs/${specID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param specID ID of the spec.
    * @param spec 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (specID: string, spec: Spec,  accessToken?: string ): Promise<Spec> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/specs/${specID}`, { data: spec, params: { accessToken, impersonating } }  );
    }

   /**
    * @param specID ID of the spec.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (specID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/specs/${specID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param specID ID of the spec.
    * @param spec 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (specID: string, spec: Spec,  accessToken?: string ): Promise<Spec> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/specs/${specID}`, { data: spec, params: { accessToken, impersonating } }  );
    }

   /**
    * @param specID ID of the spec.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListOptions (specID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListSpecOption> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/specs/${specID}/options`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param specID ID of the spec.
    * @param specOption 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async CreateOption (specID: string, specOption: SpecOption,  accessToken?: string ): Promise<SpecOption> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/specs/${specID}/options`, { data: specOption, params: { accessToken, impersonating } }  );
    }

   /**
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetOption (specID: string, optionID: string,  accessToken?: string ): Promise<SpecOption> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/specs/${specID}/options/${optionID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param specOption 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveOption (specID: string, optionID: string, specOption: SpecOption,  accessToken?: string ): Promise<SpecOption> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/specs/${specID}/options/${optionID}`, { data: specOption, params: { accessToken, impersonating } }  );
    }

   /**
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteOption (specID: string, optionID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/specs/${specID}/options/${optionID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param specID ID of the spec.
    * @param optionID ID of the option.
    * @param specOption 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchOption (specID: string, optionID: string, specOption: SpecOption,  accessToken?: string ): Promise<SpecOption> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/specs/${specID}/options/${optionID}`, { data: specOption, params: { accessToken, impersonating } }  );
    }

   /**
    * @param specID ID of the spec.
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteProductAssignment (specID: string, productID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/specs/${specID}/productassignments/${productID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListProductAssignments ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListSpecProductAssignment> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/specs/productassignments`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param specProductAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveProductAssignment (specProductAssignment: SpecProductAssignment,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/specs/productassignments`, { data: specProductAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * Specs.As().List() // lists Specs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Specs();