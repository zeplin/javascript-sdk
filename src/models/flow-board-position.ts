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




export const transformFlowBoardPositionToJSON = function (value: FlowBoardPosition): any {
    return {
        x: value.x,
        y: value.y
    }
}

export const transformJSONToFlowBoardPosition = function (value: any): FlowBoardPosition {
    return {
        x: value.x,
        y: value.y
    }
}

/**
 * 
 * @export
 * @interface FlowBoardPosition
 */
export interface FlowBoardPosition {
    /**
     * 
     * @type {number}
     * @memberof FlowBoardPosition
     */
    x: number;
    /**
     * 
     * @type {number}
     * @memberof FlowBoardPosition
     */
    y: number;
}


