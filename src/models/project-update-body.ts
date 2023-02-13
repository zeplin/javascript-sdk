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




export const transformProjectUpdateBodyToJSON = function (value: ProjectUpdateBody): any {
    return {
        name: value.name,
        description: value.description,
        workflow_status_id: value.workflowStatusId,
        linked_styleguide_id: value.linkedStyleguideId
    }
}

export const transformJSONToProjectUpdateBody = function (value: any): ProjectUpdateBody {
    return {
        name: value.name,
        description: value.description,
        workflowStatusId: value.workflow_status_id,
        linkedStyleguideId: value.linked_styleguide_id
    }
}

/**
 * 
 * @export
 * @interface ProjectUpdateBody
 */
export interface ProjectUpdateBody {
    /**
     * New name for the project
     * @type {string}
     * @memberof ProjectUpdateBody
     */
    name?: string;
    /**
     * New description for the project
     * @type {string}
     * @memberof ProjectUpdateBody
     */
    description?: string;
    /**
     * Id of the new workflow status for the project
     * @type {string}
     * @memberof ProjectUpdateBody
     */
    workflowStatusId?: string;
    /**
     * The unique id of the styleguide to be linked. Set null to unlink the linked styleguide.
     * @type {string}
     * @memberof ProjectUpdateBody
     */
    linkedStyleguideId?: string | null;
}


