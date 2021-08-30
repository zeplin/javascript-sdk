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
    ColorData,
    transformColorDataToJSON,
    transformJSONToColorData
} from './color-data';
import {
    ResourceSource,
    transformResourceSourceToJSON,
    transformJSONToResourceSource
} from './resource-source';


export const transformTextStyleToJSON = function (value: TextStyle): any {
    return {
        id: value.id,
        name: value.name,
        created: value.created,
        postscript_name: value.postscriptName,
        font_family: value.fontFamily,
        font_size: value.fontSize,
        font_weight: value.fontWeight,
        font_style: value.fontStyle,
        font_stretch: value.fontStretch,
        line_height: value.lineHeight,
        letter_spacing: value.letterSpacing,
        text_align: value.textAlign,
        color: value.color && transformColorDataToJSON(value.color),
        source: value.source && transformResourceSourceToJSON(value.source)
    }
}

export const transformJSONToTextStyle = function (value: any): TextStyle {
    return {
        id: value.id,
        name: value.name,
        created: value.created,
        postscriptName: value.postscript_name,
        fontFamily: value.font_family,
        fontSize: value.font_size,
        fontWeight: value.font_weight,
        fontStyle: value.font_style,
        fontStretch: value.font_stretch,
        lineHeight: value.line_height,
        letterSpacing: value.letter_spacing,
        textAlign: value.text_align,
        color: value.color && transformJSONToColorData(value.color),
        source: value.source && transformJSONToResourceSource(value.source)
    }
}

/**
 * 
 * @export
 * @interface TextStyle
 */
export interface TextStyle {
    /**
     * Identifier of the text style
     * @type {string}
     * @memberof TextStyle
     */
    id: string;
    /**
     * Name of the text style
     * @type {string}
     * @memberof TextStyle
     */
    name: string;
    /**
     * The unix timestamp when the text style was created
     * @type {number}
     * @memberof TextStyle
     */
    created: number;
    /**
     * PostScript name of the text style, e.g. Roboto-Regular
     * @type {string}
     * @memberof TextStyle
     */
    postscriptName: string;
    /**
     * Font family of the text style, e.g. Roboto, Arial
     * @type {string}
     * @memberof TextStyle
     */
    fontFamily: string;
    /**
     * Font size of the text style
     * @type {number}
     * @memberof TextStyle
     */
    fontSize: number;
    /**
     * Font weight of the text style, e.g. 500, 700
     * @type {number}
     * @memberof TextStyle
     */
    fontWeight: number;
    /**
     * Font style of the text style, e.g. italic, oblique
     * @type {string}
     * @memberof TextStyle
     */
    fontStyle: string;
    /**
     * Font stretch form of the text style, e.g. 0.75, 1.00
     * @type {number}
     * @memberof TextStyle
     */
    fontStretch: number;
    /**
     * Minimum height of a line for the text style
     * @type {number}
     * @memberof TextStyle
     */
    lineHeight?: number;
    /**
     * Spacing between letters
     * @type {number}
     * @memberof TextStyle
     */
    letterSpacing?: number;
    /**
     * Horizontal alignment of the text style, left, right, center, or justify
     * @type {string}
     * @memberof TextStyle
     */
    textAlign?: string;
    /**
     * 
     * @type {ColorData}
     * @memberof TextStyle
     */
    color?: ColorData;
    /**
     * 
     * @type {ResourceSource}
     * @memberof TextStyle
     */
    source?: ResourceSource;
}


