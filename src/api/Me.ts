import { MeUser } from '../models/MeUser';
import { ListBuyerAddress } from '../models/ListBuyerAddress';
import { BuyerAddress } from '../models/BuyerAddress';
import { ListCatalog } from '../models/ListCatalog';
import { Catalog } from '../models/Catalog';
import { ListCategory } from '../models/ListCategory';
import { Category } from '../models/Category';
import { ListCostCenter } from '../models/ListCostCenter';
import { ListBuyerCreditCard } from '../models/ListBuyerCreditCard';
import { BuyerCreditCard } from '../models/BuyerCreditCard';
import { ListOrder } from '../models/ListOrder';
import { TokenPasswordReset } from '../models/TokenPasswordReset';
import { ListBuyerProduct } from '../models/ListBuyerProduct';
import { BuyerProduct } from '../models/BuyerProduct';
import { ListBuyerSpec } from '../models/ListBuyerSpec';
import { BuyerSpec } from '../models/BuyerSpec';
import { ListPromotion } from '../models/ListPromotion';
import { Promotion } from '../models/Promotion';
import { AccessTokenBasic } from '../models/AccessTokenBasic';
import { ListShipment } from '../models/ListShipment';
import { Shipment } from '../models/Shipment';
import { ListShipmentItem } from '../models/ListShipmentItem';
import { ListSpendingAccount } from '../models/ListSpendingAccount';
import { SpendingAccount } from '../models/SpendingAccount';
import { ListUserGroup } from '../models/ListUserGroup';
import httpClient from '../utils/httpClient';

class Me {
    private impersonating:boolean = false;

   /**
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get ( accessToken?: string ): Promise<Required<MeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param meUser Required fields: Username, FirstName, LastName, Email, Active
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (meUser: MeUser,  accessToken?: string ): Promise<Required<MeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me`, { data: meUser, params: { accessToken, impersonating } }  );
    }

   /**
    * @param meUser 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (meUser: Partial<MeUser>,  accessToken?: string ): Promise<Required<MeUser>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me`, { data: meUser, params: { accessToken, impersonating } }  );
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAddresses ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListBuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/addresses`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async CreateAddress (buyerAddress: BuyerAddress,  accessToken?: string ): Promise<Required<BuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/addresses`, { data: buyerAddress, params: { accessToken, impersonating } }  );
    }

   /**
    * @param addressID ID of the address.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetAddress (addressID: string,  accessToken?: string ): Promise<Required<BuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/addresses/${addressID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param addressID ID of the address.
    * @param buyerAddress Required fields: Street1, City, State, Zip, Country
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAddress (addressID: string, buyerAddress: BuyerAddress,  accessToken?: string ): Promise<Required<BuyerAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/addresses/${addressID}`, { data: buyerAddress, params: { accessToken, impersonating } }  );
    }

   /**
    * @param addressID ID of the address.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAddress (addressID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/me/addresses/${addressID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param addressID ID of the address.
    * @param buyerAddress 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchAddress (addressID: string, buyerAddress: Partial<BuyerAddress>,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me/addresses/${addressID}`, { data: buyerAddress, params: { accessToken, impersonating } }  );
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListCatalogs ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListCatalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/catalogs`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetCatalog (catalogID: string,  accessToken?: string ): Promise<Required<Catalog>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/catalogs/${catalogID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param options.depth Indicates how deep down the hierarchy to return results. Valid values are a number of 1 or greater, or 'all'. Relative to ParentID if specified. Default is 1.
    * @param options.catalogID ID of the catalog.
    * @param options.productID ID of the product.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListCategories ( options: { depth?: string, catalogID?: string, productID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListCategory>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/categories`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param categoryID ID of the category.
    * @param options.catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetCategory (categoryID: string,  options: { catalogID?: string } , accessToken?: string ): Promise<Required<Category>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/categories/${categoryID}`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListCostCenters ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListCostCenter>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/costcenters`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListCreditCards ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListBuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/creditcards`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param buyerCreditCard 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async CreateCreditCard (buyerCreditCard: Partial<BuyerCreditCard>,  accessToken?: string ): Promise<Required<BuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/creditcards`, { data: buyerCreditCard, params: { accessToken, impersonating } }  );
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetCreditCard (creditcardID: string,  accessToken?: string ): Promise<Required<BuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/creditcards/${creditcardID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param buyerCreditCard 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveCreditCard (creditcardID: string, buyerCreditCard: Partial<BuyerCreditCard>,  accessToken?: string ): Promise<Required<BuyerCreditCard>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/creditcards/${creditcardID}`, { data: buyerCreditCard, params: { accessToken, impersonating } }  );
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteCreditCard (creditcardID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/me/creditcards/${creditcardID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param creditcardID ID of the creditcard.
    * @param buyerCreditCard 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async PatchCreditCard (creditcardID: string, buyerCreditCard: Partial<BuyerCreditCard>,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/me/creditcards/${creditcardID}`, { data: buyerCreditCard, params: { accessToken, impersonating } }  );
    }

   /**
    * @param options.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param options.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListOrders ( options: { from?: string, to?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListOrder>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/orders`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param options.anonUserToken Anon user token of the me.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async TransferAnonUserOrder ( options: { anonUserToken?: string } , accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/orders`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param options.from Lower bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param options.to Upper bound of date range that the order was created (if outgoing) or submitted (if incoming).
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListApprovableOrders ( options: { from?: string, to?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListOrder>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/orders/approvable`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param tokenPasswordReset Required fields: NewPassword
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ResetPasswordByToken (tokenPasswordReset: TokenPasswordReset,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/me/password`, { data: tokenPasswordReset, params: { accessToken, impersonating } }  );
    }

   /**
    * @param options.catalogID ID of the catalog.
    * @param options.categoryID ID of the category.
    * @param options.depth Indicates how deep down the category hierarchy to return results. Valid values are a number of 1 or greater, or 'all'. Relative to CategoryID if specified, otherwise top level of the Catalog. Default is 'all'.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListProducts ( options: { catalogID?: string, categoryID?: string, depth?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListBuyerProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/products`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetProduct (productID: string,  accessToken?: string ): Promise<Required<BuyerProduct>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param options.catalogID ID of the catalog.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListSpecs (productID: string,  options: { catalogID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListBuyerSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/products/${productID}/specs`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param productID ID of the product.
    * @param specID ID of the spec.
    * @param options.catalogID ID of the catalog.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetSpec (productID: string, specID: string,  options: { catalogID?: string } , accessToken?: string ): Promise<Required<BuyerSpec>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/products/${productID}/specs/${specID}`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListPromotions ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListPromotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/promotions`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param promotionID ID of the promotion.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetPromotion (promotionID: string,  accessToken?: string ): Promise<Required<Promotion>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/promotions/${promotionID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param options.anonUserToken Anon user token of the user.
    * @param meUser Required fields: Username, FirstName, LastName, Email, Active
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Register (meUser: MeUser,  options: { anonUserToken?: string } , accessToken?: string ): Promise<Required<AccessTokenBasic>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/me/register`, { params: { ...options, accessToken, impersonating } }, { data: meUser, params: { accessToken, impersonating } }  );
    }

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
    public async ListShipments ( options: { orderID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListShipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/shipments`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetShipment (shipmentID: string,  accessToken?: string ): Promise<Required<Shipment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/shipments/${shipmentID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param shipmentID ID of the shipment.
    * @param options.orderID ID of the order.
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListShipmentItems (shipmentID: string,  options: { orderID?: string, search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListShipmentItem>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/shipments/${shipmentID}/items`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListSpendingAccounts ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListSpendingAccount>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/spendingAccounts`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param spendingAccountID ID of the spending account.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async GetSpendingAccount (spendingAccountID: string,  accessToken?: string ): Promise<Required<SpendingAccount>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/me/spendingaccounts/${spendingAccountID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters Any additional key/value pairs passed in the query string are interpretted as filters. Valid keys are top-level properties of the returned model or 'xp.???'
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListUserGroups ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListUserGroup>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/me/usergroups`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * Me.As().List() // lists Me using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Me();