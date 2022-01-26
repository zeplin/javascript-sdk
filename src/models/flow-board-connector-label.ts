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




export const transformFlowBoardConnectorLabelToJSON = function (value: FlowBoardConnectorLabel): any {
    return {
        text: value.text,
        position: value.position,
        width: value.width
    }
}

export const transformJSONToFlowBoardConnectorLabel = function (value: any): FlowBoardConnectorLabel {
    return {
        text: value.text,
        position: value.position,
        width: value.width
    }
}

/**
 * 
 * @export
 * @interface FlowBoardConnectorLabel
 */
export interface FlowBoardConnectorLabel {
    /**
     * Text for the connector label
     * @type {string}
     * @memberof FlowBoardConnectorLabel
     */
    text: string;
    /**
     * Percentage based position of the connector label
     * @type {number}
     * @memberof FlowBoardConnectorLabel
     */
    position?: number;
    /**
     * Width of the connector label
     * @type {number}
     * @memberof FlowBoardConnectorLabel
     */
    width?: number;
}


