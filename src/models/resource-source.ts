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
    ResourceProjectSource,
    transformResourceProjectSourceToJSON,
    transformJSONToResourceProjectSource
} from './resource-project-source';
import {
    ResourceStyleguideSource,
    transformResourceStyleguideSourceToJSON,
    transformJSONToResourceStyleguideSource
} from './resource-styleguide-source';


export const transformResourceSourceToJSON = function (value: ResourceSource): any {
    return {
        project: value.project && transformResourceProjectSourceToJSON(value.project),
        styleguide: value.styleguide && transformResourceStyleguideSourceToJSON(value.styleguide)
    }
}

export const transformJSONToResourceSource = function (value: any): ResourceSource {
    return {
        project: value.project && transformJSONToResourceProjectSource(value.project),
        styleguide: value.styleguide && transformJSONToResourceStyleguideSource(value.styleguide)
    }
}

/**
 * Source details for resource. It has to be either `project` or `styleguide`.
 * @export
 * @interface ResourceSource
 */
export interface ResourceSource {
    /**
     * 
     * @type {ResourceProjectSource}
     * @memberof ResourceSource
     */
    project?: ResourceProjectSource;
    /**
     * 
     * @type {ResourceStyleguideSource}
     * @memberof ResourceSource
     */
    styleguide?: ResourceStyleguideSource;
}

