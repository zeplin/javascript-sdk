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
    ScreenAnnotationColor,
    transformScreenAnnotationColorToJSON,
    transformJSONToScreenAnnotationColor
} from './screen-annotation-color';
import {
    ScreenAnnotationNoteTypeEnum,
    transformScreenAnnotationNoteTypeEnumToJSON,
    transformJSONToScreenAnnotationNoteTypeEnum
} from './screen-annotation-note-type-enum';


export const transformScreenAnnotationNoteTypeToJSON = function (value: ScreenAnnotationNoteType): any {
    return {
        id: value.id,
        name: transformScreenAnnotationNoteTypeEnumToJSON(value.name),
        color: transformScreenAnnotationColorToJSON(value.color)
    }
}

export const transformJSONToScreenAnnotationNoteType = function (value: any): ScreenAnnotationNoteType {
    return {
        id: value.id,
        name: transformJSONToScreenAnnotationNoteTypeEnum(value.name),
        color: transformJSONToScreenAnnotationColor(value.color)
    }
}

/**
 * 
 * @export
 * @interface ScreenAnnotationNoteType
 */
export interface ScreenAnnotationNoteType {
    /**
     * The unique id of the annotation
     * @type {string}
     * @memberof ScreenAnnotationNoteType
     */
    id: string;
    /**
     * 
     * @type {ScreenAnnotationNoteTypeEnum}
     * @memberof ScreenAnnotationNoteType
     */
    name: ScreenAnnotationNoteTypeEnum;
    /**
     * 
     * @type {ScreenAnnotationColor}
     * @memberof ScreenAnnotationNoteType
     */
    color: ScreenAnnotationColor;
}


