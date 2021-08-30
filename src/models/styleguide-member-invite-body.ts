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




export const transformStyleguideMemberInviteBodyToJSON = function (value: StyleguideMemberInviteBody): any {
    return {
        handle: value.handle
    }
}

export const transformJSONToStyleguideMemberInviteBody = function (value: any): StyleguideMemberInviteBody {
    return {
        handle: value.handle
    }
}

/**
 * 
 * @export
 * @interface StyleguideMemberInviteBody
 */
export interface StyleguideMemberInviteBody {
    /**
     * Email, username or unique identifier of the user  Can also be `\"me\"` for joining the styleguide as the current user 
     * @type {string}
     * @memberof StyleguideMemberInviteBody
     */
    handle: string;
}

