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
    User,
    transformUserToJSON,
    transformJSONToUser
} from './user';
import {
    VersionCommitColor,
    transformVersionCommitColorToJSON,
    transformJSONToVersionCommitColor
} from './version-commit-color';


export const transformVersionCommitToJSON = function (value: VersionCommit): any {
    return {
        message: value.message,
        author: value.author && transformUserToJSON(value.author),
        color: value.color && transformVersionCommitColorToJSON(value.color)
    }
}

export const transformJSONToVersionCommit = function (value: any): VersionCommit {
    return {
        message: value.message,
        author: value.author && transformJSONToUser(value.author),
        color: value.color && transformJSONToVersionCommitColor(value.color)
    }
}

/**
 * 
 * @export
 * @interface VersionCommit
 */
export interface VersionCommit {
    /**
     * Commit message for the version
     * @type {string}
     * @memberof VersionCommit
     */
    message: string;
    /**
     * 
     * @type {User}
     * @memberof VersionCommit
     */
    author?: User;
    /**
     * 
     * @type {VersionCommitColor}
     * @memberof VersionCommit
     */
    color?: VersionCommitColor;
}


