import { ListPayment } from '../models/ListPayment';
import { Payment } from '../models/Payment';
import { PaymentTransaction } from '../models/PaymentTransaction';
import httpClient from '../utils/httpClient';

class Payments {
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
    public async List (direction: 'Incoming' | 'Outgoing', orderID: string,  options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<ListPayment> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/orders/${direction}/${orderID}/payments`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param payment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (direction: 'Incoming' | 'Outgoing', orderID: string, payment: Payment,  accessToken?: string ): Promise<Payment> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/payments`, { data: payment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (direction: 'Incoming' | 'Outgoing', orderID: string, paymentID: string,  accessToken?: string ): Promise<Payment> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/orders/${direction}/${orderID}/payments/${paymentID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (direction: 'Incoming' | 'Outgoing', orderID: string, paymentID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/orders/${direction}/${orderID}/payments/${paymentID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param payment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (direction: 'Incoming' | 'Outgoing', orderID: string, paymentID: string, payment: Payment,  accessToken?: string ): Promise<Payment> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/orders/${direction}/${orderID}/payments/${paymentID}`, { data: payment, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param paymentTransaction 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async CreateTransaction (direction: 'Incoming' | 'Outgoing', orderID: string, paymentID: string, paymentTransaction: PaymentTransaction,  accessToken?: string ): Promise<Payment> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/orders/${direction}/${orderID}/payments/${paymentID}/transactions`, { data: paymentTransaction, params: { accessToken, impersonating } }  );
    }

   /**
    * @param direction Direction of the order, from the current user's perspective. Possible values: incoming, outgoing.
    * @param orderID ID of the order.
    * @param paymentID ID of the payment.
    * @param transactionID ID of the transaction.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteTransaction (direction: 'Incoming' | 'Outgoing', orderID: string, paymentID: string, transactionID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/orders/${direction}/${orderID}/payments/${paymentID}/transactions/${transactionID}`, { params: { accessToken, impersonating } } );
    }

    /**
     * @description 
     * enables impersonation by calling the following method with the stores impersonation token
     * 
     * @example
     * Payments.As().List() // lists Payments using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new Payments();