import { ListPriceSchedule } from '../models/ListPriceSchedule';
import { PriceSchedule } from '../models/PriceSchedule';
import { PriceBreak } from '../models/PriceBreak';
import httpClient from '../utils/httpClient';

class PriceSchedules {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListPriceSchedule> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/priceschedules`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param priceSchedule 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (priceSchedule: PriceSchedule,  accessToken?: string ): Promise<PriceSchedule> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/priceschedules`, { data: priceSchedule, params: { accessToken, impersonating } }  );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (priceScheduleID: string,  accessToken?: string ): Promise<PriceSchedule> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/priceschedules/${priceScheduleID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param priceSchedule 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (priceScheduleID: string, priceSchedule: PriceSchedule,  accessToken?: string ): Promise<PriceSchedule> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/priceschedules/${priceScheduleID}`, { data: priceSchedule, params: { accessToken, impersonating } }  );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (priceScheduleID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/priceschedules/${priceScheduleID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param priceSchedule 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (priceScheduleID: string, priceSchedule: PriceSchedule,  accessToken?: string ): Promise<PriceSchedule> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/priceschedules/${priceScheduleID}`, { data: priceSchedule, params: { accessToken, impersonating } }  );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param priceBreak 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SavePriceBreak (priceScheduleID: string, priceBreak: PriceBreak,  accessToken?: string ): Promise<PriceSchedule> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/priceschedules/${priceScheduleID}/PriceBreaks`, { data: priceBreak, params: { accessToken, impersonating } }  );
    }

   /**
    * @param priceScheduleID ID of the price schedule.
    * @param options.quantity Quantity of the price schedule.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeletePriceBreak (priceScheduleID: string,  options: { quantity?: number } , accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/priceschedules/${priceScheduleID}/PriceBreaks`, { params: { ...options, accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * PriceSchedules.As().List() // lists PriceSchedules using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new PriceSchedules();