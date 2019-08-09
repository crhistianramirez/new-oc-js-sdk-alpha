import { ListCatalog } from '../models/ListCatalog';
import { Catalog } from '../models/Catalog';
import { ListCatalogAssignment } from '../models/ListCatalogAssignment';
import { CatalogAssignment } from '../models/CatalogAssignment';
import { ListProductCatalogAssignment } from '../models/ListProductCatalogAssignment';
import { ProductCatalogAssignment } from '../models/ProductCatalogAssignment';
import httpClient from '../utils/httpClient';

class Catalogs {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/catalogs`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param catalog Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (catalog: Catalog,  accessToken?: string ): Promise<Required<Catalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs`, { data: catalog, params: { accessToken, impersonating } }  );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (catalogID: string,  accessToken?: string ): Promise<Required<Catalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/${catalogID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param catalog Required fields: Name
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (catalogID: string, catalog: Catalog,  accessToken?: string ): Promise<Required<Catalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/catalogs/${catalogID}`, { data: catalog, params: { accessToken, impersonating } }  );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (catalogID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param catalog 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (catalogID: string, catalog: Partial<Catalog>,  accessToken?: string ): Promise<Required<Catalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/catalogs/${catalogID}`, { data: catalog, params: { accessToken, impersonating } }  );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param options.buyerID ID of the buyer.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment (catalogID: string,  options: { buyerID?: string } , accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteProductAssignment (catalogID: string, productID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}/productassignments/${productID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param options.catalogID ID of the catalog.
    * @param options.buyerID ID of the buyer.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments ( options: { catalogID?: string, buyerID?: string, page?: number, pageSize?: number } , accessToken?: string ): Promise<Required<ListCatalogAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param catalogAssignment Required fields: CatalogID, BuyerID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment (catalogAssignment: CatalogAssignment,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/assignments`, { data: catalogAssignment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param options.catalogID ID of the catalog.
    * @param options.productID ID of the product.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListProductAssignments ( options: { catalogID?: string, productID?: string, page?: number, pageSize?: number } , accessToken?: string ): Promise<Required<ListProductCatalogAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/productassignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param productCatalogAssignment Required fields: CatalogID, ProductID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveProductAssignment (productCatalogAssignment: ProductCatalogAssignment,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/productassignments`, { data: productCatalogAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Catalogs.As().List() // lists Catalogs using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Catalogs();