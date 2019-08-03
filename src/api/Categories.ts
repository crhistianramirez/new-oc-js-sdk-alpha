import { ListCategory } from '../models/ListCategory';
import { Category } from '../models/Category';
import { ListCategoryAssignment } from '../models/ListCategoryAssignment';
import { CategoryAssignment } from '../models/CategoryAssignment';
import { ListCategoryProductAssignment } from '../models/ListCategoryProductAssignment';
import { CategoryProductAssignment } from '../models/CategoryProductAssignment';
import httpClient from '../utils/httpClient';

class Categories {
    private impersonating:boolean = false;

   /**
    * @param catalogID ID of the catalog.
    * @param options.depth Depth of the category.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List (catalogID: string,  options: { depth?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListCategory> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/catalogs/${catalogID}/categories`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param category 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (catalogID: string, category: Category,  accessToken?: string ): Promise<Category> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/${catalogID}/categories`, { data: category, params: { accessToken, impersonating } }  );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (catalogID: string, categoryID: string,  accessToken?: string ): Promise<Category> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/${catalogID}/categories/${categoryID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param category 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (catalogID: string, categoryID: string, category: Category,  accessToken?: string ): Promise<Category> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/catalogs/${catalogID}/categories/${categoryID}`, { data: category, params: { accessToken, impersonating } }  );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (catalogID: string, categoryID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}/categories/${categoryID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param category 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (catalogID: string, categoryID: string, category: Category,  accessToken?: string ): Promise<Category> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/catalogs/${catalogID}/categories/${categoryID}`, { data: category, params: { accessToken, impersonating } }  );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param options.buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment (catalogID: string, categoryID: string,  options: { buyerID?: string, userID?: string, userGroupID?: string } , accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}/categories/${categoryID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryID ID of the category.
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteProductAssignment (catalogID: string, categoryID: string, productID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/catalogs/${catalogID}/categories/${categoryID}/productassignments/${productID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param options.categoryID ID of the category.
    * @param options.buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the category assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments (catalogID: string,  options: { categoryID?: string, buyerID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number } , accessToken?: string ): Promise<ListCategoryAssignment> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/${catalogID}/categories/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment (catalogID: string, categoryAssignment: CategoryAssignment,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/${catalogID}/categories/assignments`, { data: categoryAssignment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param options.categoryID ID of the category.
    * @param options.productID ID of the product.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListProductAssignments (catalogID: string,  options: { categoryID?: string, productID?: string, page?: number, pageSize?: number } , accessToken?: string ): Promise<ListCategoryProductAssignment> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/catalogs/${catalogID}/categories/productassignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param categoryProductAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveProductAssignment (catalogID: string, categoryProductAssignment: CategoryProductAssignment,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/catalogs/${catalogID}/categories/productassignments`, { data: categoryProductAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * Categories.As().List() // lists Categories using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Categories();