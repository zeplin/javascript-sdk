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
    DisabledOrLinkedRemPreferences,
    transformDisabledOrLinkedRemPreferencesToJSON,
    transformJSONToDisabledOrLinkedRemPreferences
} from './disabled-or-linked-rem-preferences';
import {
    EnabledRemPreferences,
    transformEnabledRemPreferencesToJSON,
    transformJSONToEnabledRemPreferences
} from './enabled-rem-preferences';


export const transformJSONToRemPreferences = function (value: any): RemPreferences {
    switch (value.status) {
        case 'disabled':
            return transformJSONToDisabledOrLinkedRemPreferences(value);
        case 'enabled':
            return transformJSONToEnabledRemPreferences(value);
        case 'linked':
            return transformJSONToDisabledOrLinkedRemPreferences(value);
        default:
            throw new Error(`No variant of RemPreferences exists with 'status=${ value.status }'`);
    }
}

export const transformRemPreferencesToJSON = function (value: RemPreferences): any {
    switch (value.status) {
        case 'disabled':
            return transformDisabledOrLinkedRemPreferencesToJSON(value);
        case 'enabled':
            return transformEnabledRemPreferencesToJSON(value);
        case 'linked':
            return transformDisabledOrLinkedRemPreferencesToJSON(value);
    }
}

/**
 * @type RemPreferences
 * rem preferences of project or styleguide. The content of this property varies depending on the value of its status field.
 * @export
 */
export type RemPreferences = DisabledOrLinkedRemPreferences | EnabledRemPreferences;

