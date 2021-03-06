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
    StyleguideMemberEventContext,
    transformStyleguideMemberEventContextToJSON,
    transformJSONToStyleguideMemberEventContext
} from './styleguide-member-event-context';
import {
    StyleguideMemberRemovedEventResource,
    transformStyleguideMemberRemovedEventResourceToJSON,
    transformJSONToStyleguideMemberRemovedEventResource
} from './styleguide-member-removed-event-resource';
import {
    WebhookEventActor,
    transformWebhookEventActorToJSON,
    transformJSONToWebhookEventActor
} from './webhook-event-actor';


export const transformStyleguideMemberRemovedEventToJSON = function (value: StyleguideMemberRemovedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformStyleguideMemberRemovedEventResourceToJSON(value.resource),
        context: transformStyleguideMemberEventContextToJSON(value.context),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToStyleguideMemberRemovedEvent = function (value: any): StyleguideMemberRemovedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToStyleguideMemberRemovedEventResource(value.resource),
        context: transformJSONToStyleguideMemberEventContext(value.context),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface StyleguideMemberRemovedEvent
 */
export interface StyleguideMemberRemovedEvent {
    /**
     * 
     * @type {string}
     * @memberof StyleguideMemberRemovedEvent
     */
    event: 'styleguide.member';
    /**
     * 
     * @type {string}
     * @memberof StyleguideMemberRemovedEvent
     */
    action: 'removed';
    /**
     * 
     * @type {number}
     * @memberof StyleguideMemberRemovedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {StyleguideMemberRemovedEventResource}
     * @memberof StyleguideMemberRemovedEvent
     */
    resource: StyleguideMemberRemovedEventResource;
    /**
     * 
     * @type {StyleguideMemberEventContext}
     * @memberof StyleguideMemberRemovedEvent
     */
    context: StyleguideMemberEventContext;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof StyleguideMemberRemovedEvent
     */
    actor: WebhookEventActor;
}


