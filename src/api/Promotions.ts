import { ListPromotion } from '../models/ListPromotion';
import { Promotion } from '../models/Promotion';
import { ListPromotionAssignment } from '../models/ListPromotionAssignment';
import { PromotionAssignment } from '../models/PromotionAssignment';
import httpClient from '../utils/httpClient';

class Promotions {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/promotions`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param promotion Required fields: Code, EligibleExpression, ValueExpression
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (promotion: Promotion,  accessToken?: string ): Promise<Required<Promotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/promotions`, { data: promotion, params: { accessToken, impersonating } }  );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (promotionID: string,  accessToken?: string ): Promise<Required<Promotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/promotions/${promotionID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param promotion Required fields: Code, EligibleExpression, ValueExpression
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (promotionID: string, promotion: Promotion,  accessToken?: string ): Promise<Required<Promotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/promotions/${promotionID}`, { data: promotion, params: { accessToken, impersonating } }  );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (promotionID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/promotions/${promotionID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param promotion 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (promotionID: string, promotion: Partial<Promotion>,  accessToken?: string ): Promise<Required<Promotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/promotions/${promotionID}`, { data: promotion, params: { accessToken, impersonating } }  );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param options.buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment (promotionID: string,  options: { buyerID?: string, userID?: string, userGroupID?: string } , accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/promotions/${promotionID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param options.buyerID ID of the buyer.
    * @param options.promotionID ID of the promotion.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the promotion assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments ( options: { buyerID?: string, promotionID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number } , accessToken?: string ): Promise<Required<ListPromotionAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/promotions/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param promotionAssignment Required fields: PromotionID, BuyerID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment (promotionAssignment: PromotionAssignment,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/promotions/assignments`, { data: promotionAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Promotions.As().List() // lists Promotions using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Promotions();