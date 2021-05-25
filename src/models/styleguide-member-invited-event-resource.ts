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
    StyleguideMember,
    transformStyleguideMemberToJSON,
    transformJSONToStyleguideMember
} from './styleguide-member';


export const transformStyleguideMemberInvitedEventResourceToJSON = function (value: StyleguideMemberInvitedEventResource): any {
    return {
        id: value.id,
        type: value.type,
        data: transformStyleguideMemberToJSON(value.data)
    }
}

export const transformJSONToStyleguideMemberInvitedEventResource = function (value: any): StyleguideMemberInvitedEventResource {
    return {
        id: value.id,
        type: value.type,
        data: transformJSONToStyleguideMember(value.data)
    }
}

/**
 * 
 * @export
 * @interface StyleguideMemberInvitedEventResource
 */
export interface StyleguideMemberInvitedEventResource {
    /**
     * 
     * @type {string}
     * @memberof StyleguideMemberInvitedEventResource
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideMemberInvitedEventResource
     */
    type: 'StyleguideMember';
    /**
     * 
     * @type {StyleguideMember}
     * @memberof StyleguideMemberInvitedEventResource
     */
    data: StyleguideMember;
}

