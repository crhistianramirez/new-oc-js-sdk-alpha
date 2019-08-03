import { ListLineItem } from '../models/ListLineItem';
import { LineItem } from '../models/LineItem';
import { Address } from '../models/Address';
import httpClient from '../utils/httpClient';

class LineItems {
    private impersonating:boolean = false;

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List (direction: 'Incoming' | 'Outgoing', orderID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListLineItem> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/orders/${direction}/${orderID}/lineitems`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItem 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (direction: 'Incoming' | 'Outgoing', orderID: string, lineItem: LineItem,  accessToken?: string ): Promise<LineItem> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/lineitems`, { data: lineItem, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string,  accessToken?: string ): Promise<LineItem> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param lineItem 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string, lineItem: LineItem,  accessToken?: string ): Promise<LineItem> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { data: lineItem, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param lineItem 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string, lineItem: LineItem,  accessToken?: string ): Promise<LineItem> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/orders/${direction}/${orderID}/lineitems/${lineItemID}`, { data: lineItem, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SetShippingAddress (direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string, address: Address,  accessToken?: string ): Promise<LineItem> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/orders/${direction}/${orderID}/lineitems/${lineItemID}/shipto`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchShippingAddress (direction: 'Incoming' | 'Outgoing', orderID: string, lineItemID: string, address: Address,  accessToken?: string ): Promise<LineItem> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/orders/${direction}/${orderID}/lineitems/${lineItemID}/shipto`, { data: address, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * LineItems.As().List() // lists LineItems using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new LineItems();