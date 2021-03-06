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
    LayerTextStyleRange,
    transformLayerTextStyleRangeToJSON,
    transformJSONToLayerTextStyleRange
} from './layer-text-style-range';
import {
    TextStyleData,
    transformTextStyleDataToJSON,
    transformJSONToTextStyleData
} from './text-style-data';


export const transformLayerTextStyleToJSON = function (value: LayerTextStyle): any {
    return {
        range: value.range && transformLayerTextStyleRangeToJSON(value.range),
        style: value.style && transformTextStyleDataToJSON(value.style)
    }
}

export const transformJSONToLayerTextStyle = function (value: any): LayerTextStyle {
    return {
        range: value.range && transformJSONToLayerTextStyleRange(value.range),
        style: value.style && transformJSONToTextStyleData(value.style)
    }
}

/**
 * 
 * @export
 * @interface LayerTextStyle
 */
export interface LayerTextStyle {
    /**
     * 
     * @type {LayerTextStyleRange}
     * @memberof LayerTextStyle
     */
    range?: LayerTextStyleRange;
    /**
     * 
     * @type {TextStyleData}
     * @memberof LayerTextStyle
     */
    style?: TextStyleData;
}


