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
    ProjectColorCreatedEventResource,
    transformProjectColorCreatedEventResourceToJSON,
    transformJSONToProjectColorCreatedEventResource
} from './project-color-created-event-resource';
import {
    StyleguideColorEventContext,
    transformStyleguideColorEventContextToJSON,
    transformJSONToStyleguideColorEventContext
} from './styleguide-color-event-context';
import {
    WebhookEventActor,
    transformWebhookEventActorToJSON,
    transformJSONToWebhookEventActor
} from './webhook-event-actor';


export const transformStyleguideColorCreatedEventToJSON = function (value: StyleguideColorCreatedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformProjectColorCreatedEventResourceToJSON(value.resource),
        context: transformStyleguideColorEventContextToJSON(value.context),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToStyleguideColorCreatedEvent = function (value: any): StyleguideColorCreatedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToProjectColorCreatedEventResource(value.resource),
        context: transformJSONToStyleguideColorEventContext(value.context),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface StyleguideColorCreatedEvent
 */
export interface StyleguideColorCreatedEvent {
    /**
     * 
     * @type {string}
     * @memberof StyleguideColorCreatedEvent
     */
    event: 'styleguide.color';
    /**
     * 
     * @type {string}
     * @memberof StyleguideColorCreatedEvent
     */
    action: 'created';
    /**
     * 
     * @type {number}
     * @memberof StyleguideColorCreatedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {ProjectColorCreatedEventResource}
     * @memberof StyleguideColorCreatedEvent
     */
    resource: ProjectColorCreatedEventResource;
    /**
     * 
     * @type {StyleguideColorEventContext}
     * @memberof StyleguideColorCreatedEvent
     */
    context: StyleguideColorEventContext;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof StyleguideColorCreatedEvent
     */
    actor: WebhookEventActor;
}


