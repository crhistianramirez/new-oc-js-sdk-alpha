import { ListProductFacet } from '../models/ListProductFacet';
import { ProductFacet } from '../models/ProductFacet';
import httpClient from '../utils/httpClient';

class ProductFacets {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/productfacets`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param productFacet Required fields: Name, MinCount
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (productFacet: ProductFacet,  accessToken?: string ): Promise<Required<ProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/productfacets`, { data: productFacet, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (productFacetID: string,  accessToken?: string ): Promise<Required<ProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/productfacets/${productFacetID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param productFacet Required fields: Name, MinCount
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (productFacetID: string, productFacet: ProductFacet,  accessToken?: string ): Promise<Required<ProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/productfacets/${productFacetID}`, { data: productFacet, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (productFacetID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/productfacets/${productFacetID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productFacetID ID of the product facet.
    * @param productFacet 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (productFacetID: string, productFacet: Partial<ProductFacet>,  accessToken?: string ): Promise<Required<ProductFacet>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/productfacets/${productFacetID}`, { data: productFacet, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * ProductFacets.As().List() // lists ProductFacets using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new ProductFacets();