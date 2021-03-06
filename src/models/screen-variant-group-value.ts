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




export const transformScreenVariantGroupValueToJSON = function (value: ScreenVariantGroupValue): any {
    return {
        screen_id: value.screenId,
        value: value.value
    }
}

export const transformJSONToScreenVariantGroupValue = function (value: any): ScreenVariantGroupValue {
    return {
        screenId: value.screen_id,
        value: value.value
    }
}

/**
 * 
 * @export
 * @interface ScreenVariantGroupValue
 */
export interface ScreenVariantGroupValue {
    /**
     * Unique id of the variant screen
     * @type {string}
     * @memberof ScreenVariantGroupValue
     */
    screenId: string;
    /**
     * Value for the variant
     * @type {string}
     * @memberof ScreenVariantGroupValue
     */
    value: string;
}


