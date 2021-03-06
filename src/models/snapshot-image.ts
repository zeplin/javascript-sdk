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
    Thumbnails,
    transformThumbnailsToJSON,
    transformJSONToThumbnails
} from './thumbnails';


export const transformSnapshotImageToJSON = function (value: SnapshotImage): any {
    return {
        width: value.width,
        height: value.height,
        thumbnails: transformThumbnailsToJSON(value.thumbnails),
        original_url: value.originalUrl
    }
}

export const transformJSONToSnapshotImage = function (value: any): SnapshotImage {
    return {
        width: value.width,
        height: value.height,
        thumbnails: transformJSONToThumbnails(value.thumbnails),
        originalUrl: value.original_url
    }
}

/**
 * 
 * @export
 * @interface SnapshotImage
 */
export interface SnapshotImage {
    /**
     * Width of the component image
     * @type {number}
     * @memberof SnapshotImage
     */
    width: number;
    /**
     * Height of the component image
     * @type {number}
     * @memberof SnapshotImage
     */
    height: number;
    /**
     * 
     * @type {Thumbnails}
     * @memberof SnapshotImage
     */
    thumbnails: Thumbnails;
    /**
     * URL of the original image for the component (from the latest version)
     * @type {string}
     * @memberof SnapshotImage
     */
    originalUrl: string;
}


