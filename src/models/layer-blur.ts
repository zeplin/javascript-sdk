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




export const transformLayerBlurToJSON = function (value: LayerBlur): any {
    return {
        type: value.type,
        radius: value.radius
    }
}

export const transformJSONToLayerBlur = function (value: any): LayerBlur {
    return {
        type: value.type,
        radius: value.radius
    }
}

/**
 * Blur applied to the layer
 * @export
 * @interface LayerBlur
 */
export interface LayerBlur {
    /**
     * Type of the blur
     * @type {string}
     * @memberof LayerBlur
     */
    type?: 'gaussian' | 'background';
    /**
     * Radius of the blur
     * @type {number}
     * @memberof LayerBlur
     */
    radius?: number;
}


