import { ListShipment } from '../models/ListShipment';
import { Shipment } from '../models/Shipment';
import { ListShipmentItem } from '../models/ListShipmentItem';
import { ShipmentItem } from '../models/ShipmentItem';
import httpClient from '../utils/httpClient';

class Shipments {
    private impersonating:boolean = false;

   /**
    * @param options.orderID ID of the order.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List ( options: { orderID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/shipments`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param shipment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (shipment: Partial<Shipment>,  accessToken?: string ): Promise<Required<Shipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/shipments`, { data: shipment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (shipmentID: string,  accessToken?: string ): Promise<Required<Shipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/shipments/${shipmentID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param shipment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (shipmentID: string, shipment: Partial<Shipment>,  accessToken?: string ): Promise<Required<Shipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/shipments/${shipmentID}`, { data: shipment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (shipmentID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/shipments/${shipmentID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param shipment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (shipmentID: string, shipment: Partial<Shipment>,  accessToken?: string ): Promise<Required<Shipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/shipments/${shipmentID}`, { data: shipment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListItems (shipmentID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListShipmentItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/shipments/${shipmentID}/items`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param shipmentItem Required fields: OrderID, LineItemID, QuantityShipped
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveItem (shipmentID: string, shipmentItem: ShipmentItem,  accessToken?: string ): Promise<Required<ShipmentItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/shipments/${shipmentID}/items`, { data: shipmentItem, params: { accessToken, impersonating } }  );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetItem (shipmentID: string, orderID: string, lineItemID: string,  accessToken?: string ): Promise<Required<ShipmentItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param orderID ID of the order.
    * @param lineItemID ID of the line item.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteItem (shipmentID: string, orderID: string, lineItemID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/shipments/${shipmentID}/items/${orderID}/${lineItemID}`, { params: { accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Shipments.As().List() // lists Shipments using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Shipments();