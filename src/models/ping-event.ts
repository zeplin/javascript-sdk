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




export const transformPingEventToJSON = function (value: PingEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: value.resource,
        context: value.context
    }
}

export const transformJSONToPingEvent = function (value: any): PingEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: value.resource,
        context: value.context
    }
}

/**
 * 
 * @export
 * @interface PingEvent
 */
export interface PingEvent {
    /**
     * 
     * @type {string}
     * @memberof PingEvent
     */
    event: 'ping';
    /**
     * 
     * @type {string}
     * @memberof PingEvent
     */
    action: 'ping';
    /**
     * 
     * @type {number}
     * @memberof PingEvent
     */
    timestamp: number;
    /**
     * 
     * @type {object}
     * @memberof PingEvent
     */
    resource: object;
    /**
     * 
     * @type {object}
     * @memberof PingEvent
     */
    context: object;
}

