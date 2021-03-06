/* tslint:disable */
/* eslint-disable */
/**
 * Zeplin API
 * Access your resources in Zeplin
 *
 * Contact: support@zeplin.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import {
    User,
    transformUserToJSON,
    transformJSONToUser
} from './user';


export const transformWebhookEventActorToJSON = function (value: WebhookEventActor): any {
    return {
        user: transformUserToJSON(value.user)
    }
}

export const transformJSONToWebhookEventActor = function (value: any): WebhookEventActor {
    return {
        user: transformJSONToUser(value.user)
    }
}

/**
 * 
 * @export
 * @interface WebhookEventActor
 */
export interface WebhookEventActor {
    /**
     * 
     * @type {User}
     * @memberof WebhookEventActor
     */
    user: User;
}


