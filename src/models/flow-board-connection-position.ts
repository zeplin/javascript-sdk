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




export const transformFlowBoardConnectionPositionToJSON = function (value: FlowBoardConnectionPosition): any {
    return {
        dot_index: value.dotIndex,
        side: value.side
    }
}

export const transformJSONToFlowBoardConnectionPosition = function (value: any): FlowBoardConnectionPosition {
    return {
        dotIndex: value.dot_index,
        side: value.side
    }
}

/**
 * 
 * @export
 * @interface FlowBoardConnectionPosition
 */
export interface FlowBoardConnectionPosition {
    /**
     * 
     * @type {number}
     * @memberof FlowBoardConnectionPosition
     */
    dotIndex: number;
    /**
     * 
     * @type {string}
     * @memberof FlowBoardConnectionPosition
     */
    side: 'left' | 'right' | 'bottom' | 'top';
}


