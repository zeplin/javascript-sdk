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




export const transformThumbnailsToJSON = function (value: Thumbnails): any {
    return {
        small: value.small,
        medium: value.medium,
        large: value.large
    }
}

export const transformJSONToThumbnails = function (value: any): Thumbnails {
    return {
        small: value.small,
        medium: value.medium,
        large: value.large
    }
}

/**
 * Thumbnail image URLs in various sizes. The aspect ratio of the original image is preserved. If the width of original image is lower than the desired width then the original width is used.
 * @export
 * @interface Thumbnails
 */
export interface Thumbnails {
    /**
     * URL of the thumbnail image with a width of at most 256 pixels
     * @type {string}
     * @memberof Thumbnails
     */
    small: string;
    /**
     * URL of the thumbnail image with a width of at most 512 pixels
     * @type {string}
     * @memberof Thumbnails
     */
    medium: string;
    /**
     * URL of the thumbnail image with a width of at most 1024 pixels
     * @type {string}
     * @memberof Thumbnails
     */
    large: string;
}

