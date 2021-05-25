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


export const transformWorkspaceOrganizationMemberInvitedEventResourceToJSON = function (value: WorkspaceOrganizationMemberInvitedEventResource): any {
    return {
        id: value.id,
        type: value.type,
        data: transformOrganizationMemberToJSON(value.data)
    }
}

export const transformJSONToWorkspaceOrganizationMemberInvitedEventResource = function (value: any): WorkspaceOrganizationMemberInvitedEventResource {
    return {
        id: value.id,
        type: value.type,
        data: transformJSONToOrganizationMember(value.data)
    }
}

/**
 * 
 * @export
 * @interface WorkspaceOrganizationMemberInvitedEventResource
 */
export interface WorkspaceOrganizationMemberInvitedEventResource {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceOrganizationMemberInvitedEventResource
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof WorkspaceOrganizationMemberInvitedEventResource
     */
    type: 'OrganizationMember';
    /**
     * 
     * @type {OrganizationMember}
     * @memberof WorkspaceOrganizationMemberInvitedEventResource
     */
    data: OrganizationMember;
}

