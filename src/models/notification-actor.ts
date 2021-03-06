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


export const transformNotificationActorToJSON = function (value: NotificationActor): any {
    return {
        user: transformUserToJSON(value.user)
    }
}

export const transformJSONToNotificationActor = function (value: any): NotificationActor {
    return {
        user: transformJSONToUser(value.user)
    }
}

/**
 * The actor of the change triggering this notification
 * @export
 * @interface NotificationActor
 */
export interface NotificationActor {
    /**
     * 
     * @type {User}
     * @memberof NotificationActor
     */
    user: User;
}


