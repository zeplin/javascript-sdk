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
    Reaction,
    transformReactionToJSON,
    transformJSONToReaction
} from './reaction';


export const transformProjectNoteCommentReactionCreatedEventResourceToJSON = function (value: ProjectNoteCommentReactionCreatedEventResource): any {
    return {
        id: value.id,
        type: value.type,
        data: transformReactionToJSON(value.data)
    }
}

export const transformJSONToProjectNoteCommentReactionCreatedEventResource = function (value: any): ProjectNoteCommentReactionCreatedEventResource {
    return {
        id: value.id,
        type: value.type,
        data: transformJSONToReaction(value.data)
    }
}

/**
 * 
 * @export
 * @interface ProjectNoteCommentReactionCreatedEventResource
 */
export interface ProjectNoteCommentReactionCreatedEventResource {
    /**
     * 
     * @type {string}
     * @memberof ProjectNoteCommentReactionCreatedEventResource
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectNoteCommentReactionCreatedEventResource
     */
    type: 'Reaction';
    /**
     * 
     * @type {Reaction}
     * @memberof ProjectNoteCommentReactionCreatedEventResource
     */
    data: Reaction;
}


