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


export const transformWorkspaceNotificationUpdatedEventToJSON = function (value: WorkspaceNotificationUpdatedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformWorkspaceNotificationCreatedEventResourceToJSON(value.resource),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToWorkspaceNotificationUpdatedEvent = function (value: any): WorkspaceNotificationUpdatedEvent {
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
 * @interface WorkspaceNotificationUpdatedEvent
 */
export interface WorkspaceNotificationUpdatedEvent {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceNotificationUpdatedEvent
     */
    event: 'workspace.notification';
    /**
     * 
     * @type {string}
     * @memberof WorkspaceNotificationUpdatedEvent
     */
    action: 'updated';
    /**
     * 
     * @type {number}
     * @memberof WorkspaceNotificationUpdatedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {WorkspaceNotificationCreatedEventResource}
     * @memberof WorkspaceNotificationUpdatedEvent
     */
    resource: WorkspaceNotificationCreatedEventResource;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof WorkspaceNotificationUpdatedEvent
     */
    actor: WebhookEventActor;
}


