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




export const transformStyleguideMemberRemovedEventResourceToJSON = function (value: StyleguideMemberRemovedEventResource): any {
    return {
        id: value.id,
        type: value.type
    }
}

export const transformJSONToStyleguideMemberRemovedEventResource = function (value: any): StyleguideMemberRemovedEventResource {
    return {
        id: value.id,
        type: value.type
    }
}

/**
 * 
 * @export
 * @interface StyleguideMemberRemovedEventResource
 */
export interface StyleguideMemberRemovedEventResource {
    /**
     * 
     * @type {string}
     * @memberof StyleguideMemberRemovedEventResource
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof StyleguideMemberRemovedEventResource
     */
    type: 'StyleguideMember';
}


