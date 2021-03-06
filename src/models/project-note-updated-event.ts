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
    ProjectNoteCreatedEventResource,
    transformProjectNoteCreatedEventResourceToJSON,
    transformJSONToProjectNoteCreatedEventResource
} from './project-note-created-event-resource';
import {
    ProjectNoteEventContext,
    transformProjectNoteEventContextToJSON,
    transformJSONToProjectNoteEventContext
} from './project-note-event-context';
import {
    WebhookEventActor,
    transformWebhookEventActorToJSON,
    transformJSONToWebhookEventActor
} from './webhook-event-actor';


export const transformProjectNoteUpdatedEventToJSON = function (value: ProjectNoteUpdatedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformProjectNoteCreatedEventResourceToJSON(value.resource),
        context: transformProjectNoteEventContextToJSON(value.context),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToProjectNoteUpdatedEvent = function (value: any): ProjectNoteUpdatedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToProjectNoteCreatedEventResource(value.resource),
        context: transformJSONToProjectNoteEventContext(value.context),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface ProjectNoteUpdatedEvent
 */
export interface ProjectNoteUpdatedEvent {
    /**
     * 
     * @type {string}
     * @memberof ProjectNoteUpdatedEvent
     */
    event: 'project.note';
    /**
     * 
     * @type {string}
     * @memberof ProjectNoteUpdatedEvent
     */
    action: 'updated';
    /**
     * 
     * @type {number}
     * @memberof ProjectNoteUpdatedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {ProjectNoteCreatedEventResource}
     * @memberof ProjectNoteUpdatedEvent
     */
    resource: ProjectNoteCreatedEventResource;
    /**
     * 
     * @type {ProjectNoteEventContext}
     * @memberof ProjectNoteUpdatedEvent
     */
    context: ProjectNoteEventContext;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof ProjectNoteUpdatedEvent
     */
    actor: WebhookEventActor;
}


