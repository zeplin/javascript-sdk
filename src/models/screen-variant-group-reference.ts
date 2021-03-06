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




export const transformScreenVariantGroupReferenceToJSON = function (value: ScreenVariantGroupReference): any {
    return {
        id: value.id,
        name: value.name
    }
}

export const transformJSONToScreenVariantGroupReference = function (value: any): ScreenVariantGroupReference {
    return {
        id: value.id,
        name: value.name
    }
}

/**
 * Variant group that contains the screen
 * @export
 * @interface ScreenVariantGroupReference
 */
export interface ScreenVariantGroupReference {
    /**
     * Unique id of the screen variant
     * @type {string}
     * @memberof ScreenVariantGroupReference
     */
    id: string;
    /**
     * Name of the screen variant
     * @type {string}
     * @memberof ScreenVariantGroupReference
     */
    name: string;
}


