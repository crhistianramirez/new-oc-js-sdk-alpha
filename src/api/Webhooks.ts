import { ListWebhook } from '../models/ListWebhook';
import { Webhook } from '../models/Webhook';
import httpClient from '../utils/httpClient';

class Webhooks {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListWebhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/webhooks`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param webhook Required fields: Name, Url, HashKey
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (webhook: Webhook,  accessToken?: string ): Promise<Required<Webhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/webhooks`, { data: webhook, params: { accessToken, impersonating } }  );
    }

   /**
    * @param webhookID ID of the webhook.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (webhookID: string,  accessToken?: string ): Promise<Required<Webhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/webhooks/${webhookID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param webhookID ID of the webhook.
    * @param webhook Required fields: Name, Url, HashKey
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (webhookID: string, webhook: Webhook,  accessToken?: string ): Promise<Required<Webhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/webhooks/${webhookID}`, { data: webhook, params: { accessToken, impersonating } }  );
    }

   /**
    * @param webhookID ID of the webhook.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (webhookID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/webhooks/${webhookID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param webhookID ID of the webhook.
    * @param webhook 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (webhookID: string, webhook: Partial<Webhook>,  accessToken?: string ): Promise<Required<Webhook>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/webhooks/${webhookID}`, { data: webhook, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Webhooks.As().List() // lists Webhooks using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Webhooks();