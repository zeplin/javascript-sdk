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




export const transformHotspotBoundingRectangleToJSON = function (value: HotspotBoundingRectangle): any {
    return {
        width: value.width,
        height: value.height,
        x: value.x,
        y: value.y
    }
}

export const transformJSONToHotspotBoundingRectangle = function (value: any): HotspotBoundingRectangle {
    return {
        width: value.width,
        height: value.height,
        x: value.x,
        y: value.y
    }
}

/**
 * 
 * @export
 * @interface HotspotBoundingRectangle
 */
export interface HotspotBoundingRectangle {
    /**
     * 
     * @type {number}
     * @memberof HotspotBoundingRectangle
     */
    width: number;
    /**
     * 
     * @type {number}
     * @memberof HotspotBoundingRectangle
     */
    height: number;
    /**
     * 
     * @type {number}
     * @memberof HotspotBoundingRectangle
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof HotspotBoundingRectangle
     */
    y: number;
}


