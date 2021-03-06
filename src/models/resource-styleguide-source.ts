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
    EntityReference,
    transformEntityReferenceToJSON,
    transformJSONToEntityReference
} from './entity-reference';


export const transformResourceStyleguideSourceToJSON = function (value: ResourceStyleguideSource): any {
    return {
        id: value.id,
        name: value.name,
        platform: value.platform,
        parent: value.parent && transformEntityReferenceToJSON(value.parent)
    }
}

export const transformJSONToResourceStyleguideSource = function (value: any): ResourceStyleguideSource {
    return {
        id: value.id,
        name: value.name,
        platform: value.platform,
        parent: value.parent && transformJSONToEntityReference(value.parent)
    }
}

/**
 * The source styleguide of the resource
 * @export
 * @interface ResourceStyleguideSource
 */
export interface ResourceStyleguideSource {
    /**
     * The unique id of the source styleguide
     * @type {string}
     * @memberof ResourceStyleguideSource
     */
    id: string;
    /**
     * The name of the source styleguide
     * @type {string}
     * @memberof ResourceStyleguideSource
     */
    name: string;
    /**
     * The target platform of the source styleguide
     * @type {string}
     * @memberof ResourceStyleguideSource
     */
    platform: 'base' | 'web' | 'ios' | 'android' | 'macos';
    /**
     * 
     * @type {EntityReference}
     * @memberof ResourceStyleguideSource
     */
    parent?: EntityReference;
}


