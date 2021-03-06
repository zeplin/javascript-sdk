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
    ColorData,
    transformColorDataToJSON,
    transformJSONToColorData
} from './color-data';
import {
    Link,
    transformLinkToJSON,
    transformJSONToLink
} from './link';
import {
    SourceEnum,
    transformSourceEnumToJSON,
    transformJSONToSourceEnum
} from './source-enum';
import {
    Thumbnails,
    transformThumbnailsToJSON,
    transformJSONToThumbnails
} from './thumbnails';
import {
    User,
    transformUserToJSON,
    transformJSONToUser
} from './user';
import {
    VersionCommit,
    transformVersionCommitToJSON,
    transformJSONToVersionCommit
} from './version-commit';


export const transformScreenVersionSummaryToJSON = function (value: ScreenVersionSummary): any {
    return {
        id: value.id,
        creator: value.creator && transformUserToJSON(value.creator),
        commit: value.commit && transformVersionCommitToJSON(value.commit),
        image_url: value.imageUrl,
        thumbnails: transformThumbnailsToJSON(value.thumbnails),
        source: transformSourceEnumToJSON(value.source),
        width: value.width,
        height: value.height,
        background_color: value.backgroundColor && transformColorDataToJSON(value.backgroundColor),
        density_scale: value.densityScale,
        links: value.links.map(transformLinkToJSON),
        created: value.created
    }
}

export const transformJSONToScreenVersionSummary = function (value: any): ScreenVersionSummary {
    return {
        id: value.id,
        creator: value.creator && transformJSONToUser(value.creator),
        commit: value.commit && transformJSONToVersionCommit(value.commit),
        imageUrl: value.image_url,
        thumbnails: transformJSONToThumbnails(value.thumbnails),
        source: transformJSONToSourceEnum(value.source),
        width: value.width,
        height: value.height,
        backgroundColor: value.background_color && transformJSONToColorData(value.background_color),
        densityScale: value.density_scale,
        links: value.links.map(transformJSONToLink),
        created: value.created
    }
}

/**
 * 
 * @export
 * @interface ScreenVersionSummary
 */
export interface ScreenVersionSummary {
    /**
     * The unique id of the version
     * @type {string}
     * @memberof ScreenVersionSummary
     */
    id: string;
    /**
     * 
     * @type {User}
     * @memberof ScreenVersionSummary
     */
    creator?: User;
    /**
     * 
     * @type {VersionCommit}
     * @memberof ScreenVersionSummary
     */
    commit?: VersionCommit;
    /**
     * URL of the image for the version
     * @type {string}
     * @memberof ScreenVersionSummary
     */
    imageUrl: string;
    /**
     * 
     * @type {Thumbnails}
     * @memberof ScreenVersionSummary
     */
    thumbnails: Thumbnails;
    /**
     * 
     * @type {SourceEnum}
     * @memberof ScreenVersionSummary
     */
    source: SourceEnum;
    /**
     * Width of the version
     * @type {number}
     * @memberof ScreenVersionSummary
     */
    width: number;
    /**
     * Height of the version
     * @type {number}
     * @memberof ScreenVersionSummary
     */
    height: number;
    /**
     * 
     * @type {ColorData}
     * @memberof ScreenVersionSummary
     */
    backgroundColor?: ColorData;
    /**
     * Pixel density
     * @type {number}
     * @memberof ScreenVersionSummary
     */
    densityScale: number;
    /**
     * 
     * @type {Array<Link>}
     * @memberof ScreenVersionSummary
     */
    links: Array<Link>;
    /**
     * The unix timestamp when the screen version was created
     * @type {number}
     * @memberof ScreenVersionSummary
     */
    created: number;
}


