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




export const transformSpacingTokenUpdateBodyToJSON = function (value: SpacingTokenUpdateBody): any {
    return {
        name: value.name,
        value: value.value
    }
}

export const transformJSONToSpacingTokenUpdateBody = function (value: any): SpacingTokenUpdateBody {
    return {
        name: value.name,
        value: value.value
    }
}

/**
 * 
 * @export
 * @interface SpacingTokenUpdateBody
 */
export interface SpacingTokenUpdateBody {
    /**
     * The name of the token
     * @type {string}
     * @memberof SpacingTokenUpdateBody
     */
    name?: string;
    /**
     * The value of the token
     * @type {number}
     * @memberof SpacingTokenUpdateBody
     */
    value?: number;
}

