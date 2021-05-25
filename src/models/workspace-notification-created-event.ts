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
    WebhookEventActor,
    transformWebhookEventActorToJSON,
    transformJSONToWebhookEventActor
} from './webhook-event-actor';
import {
    WorkspaceNotificationCreatedEventResource,
    transformWorkspaceNotificationCreatedEventResourceToJSON,
    transformJSONToWorkspaceNotificationCreatedEventResource
} from './workspace-notification-created-event-resource';


export const transformWorkspaceNotificationCreatedEventToJSON = function (value: WorkspaceNotificationCreatedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformWorkspaceNotificationCreatedEventResourceToJSON(value.resource),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToWorkspaceNotificationCreatedEvent = function (value: any): WorkspaceNotificationCreatedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToWorkspaceNotificationCreatedEventResource(value.resource),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface WorkspaceNotificationCreatedEvent
 */
export interface WorkspaceNotificationCreatedEvent {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceNotificationCreatedEvent
     */
    event: 'workspace.notification';
    /**
     * 
     * @type {string}
     * @memberof WorkspaceNotificationCreatedEvent
     */
    action: 'created';
    /**
     * 
     * @type {number}
     * @memberof WorkspaceNotificationCreatedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {WorkspaceNotificationCreatedEventResource}
     * @memberof WorkspaceNotificationCreatedEvent
     */
    resource: WorkspaceNotificationCreatedEventResource;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof WorkspaceNotificationCreatedEvent
     */
    actor: WebhookEventActor;
}

