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




export const transformCommentUpdateBodyToJSON = function (value: CommentUpdateBody): any {
    return {
        content: value.content
    }
}

export const transformJSONToCommentUpdateBody = function (value: any): CommentUpdateBody {
    return {
        content: value.content
    }
}

/**
 * 
 * @export
 * @interface CommentUpdateBody
 */
export interface CommentUpdateBody {
    /**
     * Content of the comment
     * @type {string}
     * @memberof CommentUpdateBody
     */
    content: string;
}


