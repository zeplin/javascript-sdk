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
    ComponentSectionVariantProperty,
    transformComponentSectionVariantPropertyToJSON,
    transformJSONToComponentSectionVariantProperty
} from './component-section-variant-property';


export const transformComponentSectionVariantToJSON = function (value: ComponentSectionVariant): any {
    return {
        properties: value.properties.map(transformComponentSectionVariantPropertyToJSON),
        source_id: value.sourceId
    }
}

export const transformJSONToComponentSectionVariant = function (value: any): ComponentSectionVariant {
    return {
        properties: value.properties.map(transformJSONToComponentSectionVariantProperty),
        sourceId: value.source_id
    }
}

/**
 * Variant information for this component section
 * @export
 * @interface ComponentSectionVariant
 */
export interface ComponentSectionVariant {
    /**
     * List of variant properties that the components of this section take
     * @type {Array<ComponentSectionVariantProperty>}
     * @memberof ComponentSectionVariant
     */
    properties: Array<ComponentSectionVariantProperty>;
    /**
     * Unique identifier used for this variant in the source design file
     * @type {string}
     * @memberof ComponentSectionVariant
     */
    sourceId?: string;
}

