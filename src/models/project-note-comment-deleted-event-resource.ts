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




export const transformProjectNoteCommentDeletedEventResourceToJSON = function (value: ProjectNoteCommentDeletedEventResource): any {
    return {
        id: value.id,
        type: value.type
    }
}

export const transformJSONToProjectNoteCommentDeletedEventResource = function (value: any): ProjectNoteCommentDeletedEventResource {
    return {
        id: value.id,
        type: value.type
    }
}

/**
 * 
 * @export
 * @interface ProjectNoteCommentDeletedEventResource
 */
export interface ProjectNoteCommentDeletedEventResource {
    /**
     * 
     * @type {string}
     * @memberof ProjectNoteCommentDeletedEventResource
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectNoteCommentDeletedEventResource
     */
    type: 'ScreenNoteComment';
}


