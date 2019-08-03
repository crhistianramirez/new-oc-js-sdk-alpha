import { ListOrder } from '../models/ListOrder';
import { Order } from '../models/Order';
import { ListOrderApproval } from '../models/ListOrderApproval';
import { OrderApprovalInfo } from '../models/OrderApprovalInfo';
import { Address } from '../models/Address';
import { ListUser } from '../models/ListUser';
import { User } from '../models/User';
import { ListOrderPromotion } from '../models/ListOrderPromotion';
import { OrderPromotion } from '../models/OrderPromotion';
import { Shipment } from '../models/Shipment';
import httpClient from '../utils/httpClient';

class Orders {
    private impersonating:boolean = false;

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param options.buyerID ID of the buyer.
    * @param options.supplierID ID of the supplier.
    * @param options.from Lower bound of date range that the order was created.
    * @param options.to Upper bound of date range that the order was created.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List (direction: 'Incoming' | 'Outgoing',  options: { buyerID?: string, supplierID?: string, from?: string, to?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListOrder> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/orders/${direction}`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param order 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (direction: 'Incoming' | 'Outgoing', order: Order,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}`, { data: order, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (direction: 'Incoming' | 'Outgoing', orderID: string,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/orders/${direction}/${orderID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param order 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (direction: 'Incoming' | 'Outgoing', orderID: string, order: Order,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/orders/${direction}/${orderID}`, { data: order, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (direction: 'Incoming' | 'Outgoing', orderID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/orders/${direction}/${orderID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param order 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (direction: 'Incoming' | 'Outgoing', orderID: string, order: Order,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/orders/${direction}/${orderID}`, { data: order, params: { accessToken, impersonating } }  );
    }

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
    public async ListApprovals (direction: 'Incoming' | 'Outgoing', orderID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListOrderApproval> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/orders/${direction}/${orderID}/approvals`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param orderApprovalInfo 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Approve (direction: 'Incoming' | 'Outgoing', orderID: string, orderApprovalInfo: OrderApprovalInfo,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/approve`, { data: orderApprovalInfo, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SetBillingAddress (direction: 'Incoming' | 'Outgoing', orderID: string, address: Address,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/orders/${direction}/${orderID}/billto`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchBillingAddress (direction: 'Incoming' | 'Outgoing', orderID: string, address: Address,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/orders/${direction}/${orderID}/billto`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Cancel (direction: 'Incoming' | 'Outgoing', orderID: string,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/cancel`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param orderApprovalInfo 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Decline (direction: 'Incoming' | 'Outgoing', orderID: string, orderApprovalInfo: OrderApprovalInfo,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/decline`, { data: orderApprovalInfo, params: { accessToken, impersonating } }  );
    }

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
    public async ListEligibleApprovers (direction: 'Incoming' | 'Outgoing', orderID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListUser> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/orders/${direction}/${orderID}/eligibleapprovers`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param user 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchFromUser (direction: 'Incoming' | 'Outgoing', orderID: string, user: User,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/orders/${direction}/${orderID}/fromuser`, { data: user, params: { accessToken, impersonating } }  );
    }

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
    public async ListPromotions (direction: 'Incoming' | 'Outgoing', orderID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListOrderPromotion> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/orders/${direction}/${orderID}/promotions`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param promoCode Promo code of the order promotion.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async AddPromotion (direction: 'Incoming' | 'Outgoing', orderID: string, promoCode: string,  accessToken?: string ): Promise<OrderPromotion> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/promotions/${promoCode}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param promoCode Promo code of the order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async RemovePromotion (direction: 'Incoming' | 'Outgoing', orderID: string, promoCode: string,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/orders/${direction}/${orderID}/promotions/${promoCode}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param shipment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Ship (direction: 'Incoming' | 'Outgoing', orderID: string, shipment: Shipment,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/ship`, { data: shipment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SetShippingAddress (direction: 'Incoming' | 'Outgoing', orderID: string, address: Address,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/orders/${direction}/${orderID}/shipto`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchShippingAddress (direction: 'Incoming' | 'Outgoing', orderID: string, address: Address,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/orders/${direction}/${orderID}/shipto`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Submit (direction: 'Incoming' | 'Outgoing', orderID: string,  accessToken?: string ): Promise<Order> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/submit`, { params: { accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * Orders.As().List() // lists Orders using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Orders();