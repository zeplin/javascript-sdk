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
    TextStyle,
    transformTextStyleToJSON,
    transformJSONToTextStyle
} from './text-style';


export const transformProjectTextStyleCreatedEventResourceToJSON = function (value: ProjectTextStyleCreatedEventResource): any {
    return {
        id: value.id,
        type: value.type,
        data: transformTextStyleToJSON(value.data)
    }
}

export const transformJSONToProjectTextStyleCreatedEventResource = function (value: any): ProjectTextStyleCreatedEventResource {
    return {
        id: value.id,
        type: value.type,
        data: transformJSONToTextStyle(value.data)
    }
}

/**
 * 
 * @export
 * @interface ProjectTextStyleCreatedEventResource
 */
export interface ProjectTextStyleCreatedEventResource {
    /**
     * 
     * @type {string}
     * @memberof ProjectTextStyleCreatedEventResource
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ProjectTextStyleCreatedEventResource
     */
    type: 'TextStyle';
    /**
     * 
     * @type {TextStyle}
     * @memberof ProjectTextStyleCreatedEventResource
     */
    data: TextStyle;
}


