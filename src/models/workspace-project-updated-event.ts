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
    WorkspaceProjectCreatedEventResource,
    transformWorkspaceProjectCreatedEventResourceToJSON,
    transformJSONToWorkspaceProjectCreatedEventResource
} from './workspace-project-created-event-resource';


export const transformWorkspaceProjectUpdatedEventToJSON = function (value: WorkspaceProjectUpdatedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformWorkspaceProjectCreatedEventResourceToJSON(value.resource),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToWorkspaceProjectUpdatedEvent = function (value: any): WorkspaceProjectUpdatedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToWorkspaceProjectCreatedEventResource(value.resource),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface WorkspaceProjectUpdatedEvent
 */
export interface WorkspaceProjectUpdatedEvent {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceProjectUpdatedEvent
     */
    event: 'workspace.project';
    /**
     * 
     * @type {string}
     * @memberof WorkspaceProjectUpdatedEvent
     */
    action: 'updated';
    /**
     * 
     * @type {number}
     * @memberof WorkspaceProjectUpdatedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {WorkspaceProjectCreatedEventResource}
     * @memberof WorkspaceProjectUpdatedEvent
     */
    resource: WorkspaceProjectCreatedEventResource;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof WorkspaceProjectUpdatedEvent
     */
    actor: WebhookEventActor;
}

