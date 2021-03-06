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
    LanguageEnum,
    transformLanguageEnumToJSON,
    transformJSONToLanguageEnum
} from './language-enum';


export const transformCodeToJSON = function (value: Code): any {
    return {
        snippet: value.snippet,
        language: value.language && transformLanguageEnumToJSON(value.language)
    }
}

export const transformJSONToCode = function (value: any): Code {
    return {
        snippet: value.snippet,
        language: value.language && transformJSONToLanguageEnum(value.language)
    }
}

/**
 * 
 * @export
 * @interface Code
 */
export interface Code {
    /**
     * The code snippet
     * @type {string}
     * @memberof Code
     */
    snippet: string;
    /**
     * 
     * @type {LanguageEnum}
     * @memberof Code
     */
    language?: LanguageEnum;
}


