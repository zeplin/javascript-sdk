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
    OrganizationSummary,
    transformOrganizationSummaryToJSON,
    transformJSONToOrganizationSummary
} from './organization-summary';


export const transformWorkspaceOrganizationMemberEventContextToJSON = function (value: WorkspaceOrganizationMemberEventContext): any {
    return {
        organization: transformOrganizationSummaryToJSON(value.organization)
    }
}

export const transformJSONToWorkspaceOrganizationMemberEventContext = function (value: any): WorkspaceOrganizationMemberEventContext {
    return {
        organization: transformJSONToOrganizationSummary(value.organization)
    }
}

/**
 * 
 * @export
 * @interface WorkspaceOrganizationMemberEventContext
 */
export interface WorkspaceOrganizationMemberEventContext {
    /**
     * 
     * @type {OrganizationSummary}
     * @memberof WorkspaceOrganizationMemberEventContext
     */
    organization: OrganizationSummary;
}


