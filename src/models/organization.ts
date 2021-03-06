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
    OrganizationMember,
    transformOrganizationMemberToJSON,
    transformJSONToOrganizationMember
} from './organization-member';


export const transformOrganizationToJSON = function (value: Organization): any {
    return {
        id: value.id,
        name: value.name,
        logo: value.logo,
        members: value.members && value.members.map(transformOrganizationMemberToJSON)
    }
}

export const transformJSONToOrganization = function (value: any): Organization {
    return {
        id: value.id,
        name: value.name,
        logo: value.logo,
        members: value.members && value.members.map(transformJSONToOrganizationMember)
    }
}

/**
 * 
 * @export
 * @interface Organization
 */
export interface Organization {
    /**
     * Organization\'s unique id
     * @type {string}
     * @memberof Organization
     */
    id: string;
    /**
     * Name of the user
     * @type {string}
     * @memberof Organization
     */
    name: string;
    /**
     * URL of the organization\'s logo
     * @type {string}
     * @memberof Organization
     */
    logo?: string;
    /**
     * Members of the organization (Does not exist on the response when user is restricted in organization)
     * @type {Array<OrganizationMember>}
     * @memberof Organization
     */
    members?: Array<OrganizationMember>;
}


