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




export const transformSourceEnumToJSON = function (value: SourceEnum): any {
    return value;
}

export const transformJSONToSourceEnum = function (value: any): SourceEnum {
    return value;
}

/**
 * Source application of the design
 * @export
 * @enum {string}
 */
export enum SourceEnum {
    SKETCH = 'sketch',
    XD = 'xd',
    FIGMA = 'figma',
    PSD = 'psd',
    BITMAP = 'bitmap'
}


