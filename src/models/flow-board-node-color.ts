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




export const transformFlowBoardNodeColorToJSON = function (value: FlowBoardNodeColor): any {
    return {
        r: value.r,
        g: value.g,
        b: value.b,
        a: value.a
    }
}

export const transformJSONToFlowBoardNodeColor = function (value: any): FlowBoardNodeColor {
    return {
        r: value.r,
        g: value.g,
        b: value.b,
        a: value.a
    }
}

/**
 * 
 * @export
 * @interface FlowBoardNodeColor
 */
export interface FlowBoardNodeColor {
    /**
     * Red component of the color
     * @type {number}
     * @memberof FlowBoardNodeColor
     */
    r: number;
    /**
     * Green component of the color
     * @type {number}
     * @memberof FlowBoardNodeColor
     */
    g: number;
    /**
     * Blue component of the color
     * @type {number}
     * @memberof FlowBoardNodeColor
     */
    b: number;
    /**
     * Alpha component of the color
     * @type {number}
     * @memberof FlowBoardNodeColor
     */
    a: number;
}


