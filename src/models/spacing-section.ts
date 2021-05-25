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


export const transformSpacingSectionToJSON = function (value: SpacingSection): any {
    return {
        id: value.id,
        name: value.name,
        description: value.description,
        base_token: transformEntityReferenceToJSON(value.baseToken)
    }
}

export const transformJSONToSpacingSection = function (value: any): SpacingSection {
    return {
        id: value.id,
        name: value.name,
        description: value.description,
        baseToken: transformJSONToEntityReference(value.base_token)
    }
}

/**
 * 
 * @export
 * @interface SpacingSection
 */
export interface SpacingSection {
    /**
     * The unique id of the section
     * @type {string}
     * @memberof SpacingSection
     */
    id: string;
    /**
     * The name of the section
     * @type {string}
     * @memberof SpacingSection
     */
    name: string;
    /**
     * The description of the section
     * @type {string}
     * @memberof SpacingSection
     */
    description?: string;
    /**
     * 
     * @type {EntityReference}
     * @memberof SpacingSection
     */
    baseToken: EntityReference;
}

