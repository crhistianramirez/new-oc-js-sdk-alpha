import { ListProduct } from '../models/ListProduct';
import { Product } from '../models/Product';
import { ListSupplier } from '../models/ListSupplier';
import { ListVariant } from '../models/ListVariant';
import { Variant } from '../models/Variant';
import { ListProductAssignment } from '../models/ListProductAssignment';
import { ProductAssignment } from '../models/ProductAssignment';
import httpClient from '../utils/httpClient';

class Products {
    private impersonating:boolean = false;

   /**
    * @param options.catalogID ID of the catalog.
    * @param options.categoryID ID of the category.
    * @param options.supplierID ID of the supplier.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List ( options: { catalogID?: string, categoryID?: string, supplierID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListProduct> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/products`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param product 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (product: Product,  accessToken?: string ): Promise<Product> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/products`, { data: product, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (productID: string,  accessToken?: string ): Promise<Product> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products/${productID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param product 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (productID: string, product: Product,  accessToken?: string ): Promise<Product> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/products/${productID}`, { data: product, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (productID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/products/${productID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param product 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (productID: string, product: Product,  accessToken?: string ): Promise<Product> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/products/${productID}`, { data: product, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productID ID of the product.
    * @param buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment (productID: string, buyerID: string,  options: { userID?: string, userGroupID?: string } , accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/products/${productID}/assignments/${buyerID}`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListSuppliers (productID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListSupplier> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/products/${productID}/suppliers`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveSupplier (productID: string, supplierID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/products/${productID}/suppliers/${supplierID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async RemoveSupplier (productID: string, supplierID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/products/${productID}/suppliers/${supplierID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListVariants (productID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListVariant> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/products/${productID}/variants`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetVariant (productID: string, variantID: string,  accessToken?: string ): Promise<Variant> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products/${productID}/variants/${variantID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param variant 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveVariant (productID: string, variantID: string, variant: Variant,  accessToken?: string ): Promise<Variant> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/products/${productID}/variants/${variantID}`, { data: variant, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productID ID of the product.
    * @param variantID ID of the variant.
    * @param variant 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchVariant (productID: string, variantID: string, variant: Variant,  accessToken?: string ): Promise<Variant> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/products/${productID}/variants/${variantID}`, { data: variant, params: { accessToken, impersonating } }  );
    }

   /**
    * @param productID ID of the product.
    * @param options.overwriteExisting Overwrite existing of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GenerateVariants (productID: string,  options: { overwriteExisting?: boolean } , accessToken?: string ): Promise<Product> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/products/${productID}/variants/generate`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param options.productID ID of the product.
    * @param options.priceScheduleID ID of the price schedule.
    * @param options.buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the product assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments ( options: { productID?: string, priceScheduleID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number } , accessToken?: string ): Promise<ListProductAssignment> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/products/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param productAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment (productAssignment: ProductAssignment,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/products/assignments`, { data: productAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * Products.As().List() // lists Products using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Products();