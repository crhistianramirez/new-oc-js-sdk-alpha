import { ListXpIndex } from '../models/ListXpIndex';
import { XpIndex } from '../models/XpIndex';
import httpClient from '../utils/httpClient';

class XpIndices {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListXpIndex> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/xpindices`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param xpIndex 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Put (xpIndex: XpIndex,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/xpindices`, { data: xpIndex, params: { accessToken, impersonating } }  );
    }

   /**
    * @param thingType Thing type of the xp index. Possible values: Product, Variant, Order, LineItem, Address, CostCenter, CreditCard, Payment, Spec, SpecOption, UserGroup, Company, Category, PriceSchedule, Shipment, SpendingAccount, User, Promotion, ApprovalRule, Catalog, ProductFacet, MessageSender.
    * @param key Key of the xp index.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (thingType: 'Product' | 'Variant' | 'Order' | 'LineItem' | 'Address' | 'CostCenter' | 'CreditCard' | 'Payment' | 'Spec' | 'SpecOption' | 'UserGroup' | 'Company' | 'Category' | 'PriceSchedule' | 'Shipment' | 'SpendingAccount' | 'User' | 'Promotion' | 'ApprovalRule' | 'Catalog' | 'ProductFacet' | 'MessageSender', key: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/xpindices/${thingType}/${key}`, { params: { accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * XpIndices.As().List() // lists XpIndices using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new XpIndices();