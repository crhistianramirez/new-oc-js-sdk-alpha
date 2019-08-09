import { ListMessageSender } from '../models/ListMessageSender';
import { MessageSender } from '../models/MessageSender';
import { ListMessageSenderAssignment } from '../models/ListMessageSenderAssignment';
import { MessageSenderAssignment } from '../models/MessageSenderAssignment';
import { ListMessageCCListenerAssignment } from '../models/ListMessageCCListenerAssignment';
import { MessageCCListenerAssignment } from '../models/MessageCCListenerAssignment';
import httpClient from '../utils/httpClient';

class MessageSenders {
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
    public async List ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListMessageSender>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/messagesenders`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param messageSender Required fields: Name, MessageTypes, URL, SharedKey
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create (messageSender: MessageSender,  accessToken?: string ): Promise<Required<MessageSender>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/messagesenders`, { data: messageSender, params: { accessToken, impersonating } }  );
    }

   /**
    * @param messageSenderID ID of the message sender.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get (messageSenderID: string,  accessToken?: string ): Promise<Required<MessageSender>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/messagesenders/${messageSenderID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param messageSenderID ID of the message sender.
    * @param messageSender Required fields: Name, MessageTypes, URL, SharedKey
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save (messageSenderID: string, messageSender: MessageSender,  accessToken?: string ): Promise<Required<MessageSender>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/messagesenders/${messageSenderID}`, { data: messageSender, params: { accessToken, impersonating } }  );
    }

   /**
    * @param messageSenderID ID of the message sender.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete (messageSenderID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/messagesenders/${messageSenderID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param messageSenderID ID of the message sender.
    * @param messageSender 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch (messageSenderID: string, messageSender: Partial<MessageSender>,  accessToken?: string ): Promise<Required<MessageSender>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/messagesenders/${messageSenderID}`, { data: messageSender, params: { accessToken, impersonating } }  );
    }

   /**
    * @param messageSenderID ID of the message sender.
    * @param options.buyerID ID of the buyer.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async DeleteAssignment (messageSenderID: string,  options: { buyerID?: string, userID?: string, userGroupID?: string, supplierID?: string } , accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/messagesenders/${messageSenderID}/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param options.buyerID ID of the buyer.
    * @param options.messageSenderID ID of the message sender.
    * @param options.userID ID of the user.
    * @param options.userGroupID ID of the user group.
    * @param options.level Level of the message sender assignment. Possible values: User, Group, Company.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.supplierID ID of the supplier.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async ListAssignments ( options: { buyerID?: string, messageSenderID?: string, userID?: string, userGroupID?: string, level?: string, page?: number, pageSize?: number, supplierID?: string } , accessToken?: string ): Promise<Required<ListMessageSenderAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/messagesenders/assignments`, { params: { ...options, accessToken, impersonating } } );
    }

   /**
    * @param messageSenderAssignment Required fields: MessageSenderID
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveAssignment (messageSenderAssignment: MessageSenderAssignment,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/messagesenders/assignments`, { data: messageSenderAssignment, params: { accessToken, impersonating } }  );
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
    public async ListCCListenerAssignments ( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: any } = { filters: {}}, accessToken?: string ): Promise<Required<ListMessageCCListenerAssignment>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        const filters = options.filters;
        delete options.filters;
        return await httpClient.get(`/messagesenders/CCListenerAssignments`, { params: { ...options, ...filters, accessToken, impersonating } } );
    }

   /**
    * @param messageCCListenerAssignment 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async SaveCCListenerAssignment (messageCCListenerAssignment: Partial<MessageCCListenerAssignment>,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/messagesenders/CCListenerAssignments`, { data: messageCCListenerAssignment, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * MessageSenders.As().List() // lists MessageSenders using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new MessageSenders();