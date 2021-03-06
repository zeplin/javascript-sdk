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




export const transformProjectScreenVersionDeletedEventResourceToJSON = function (value: ProjectScreenVersionDeletedEventResource): any {
    return {
        id: value.id,
        type: value.type
    }
}

export const transformJSONToProjectScreenVersionDeletedEventResource = function (value: any): ProjectScreenVersionDeletedEventResource {
    return {
        id: value.id,
        type: value.type
    }
}

/**
 * 
 * @export
 * @interface ProjectScreenVersionDeletedEventResource
 */
export interface ProjectScreenVersionDeletedEventResource {
    /**
     * 
     * @type {string}
     * @memberof ProjectScreenVersionDeletedEventResource
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectScreenVersionDeletedEventResource
     */
    type: 'ScreenVersionSummary';
}


