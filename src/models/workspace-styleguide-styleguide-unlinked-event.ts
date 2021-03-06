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
    WorkspaceStyleguideCreatedEventResource,
    transformWorkspaceStyleguideCreatedEventResourceToJSON,
    transformJSONToWorkspaceStyleguideCreatedEventResource
} from './workspace-styleguide-created-event-resource';


export const transformWorkspaceStyleguideStyleguideUnlinkedEventToJSON = function (value: WorkspaceStyleguideStyleguideUnlinkedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformWorkspaceStyleguideCreatedEventResourceToJSON(value.resource),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToWorkspaceStyleguideStyleguideUnlinkedEvent = function (value: any): WorkspaceStyleguideStyleguideUnlinkedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToWorkspaceStyleguideCreatedEventResource(value.resource),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface WorkspaceStyleguideStyleguideUnlinkedEvent
 */
export interface WorkspaceStyleguideStyleguideUnlinkedEvent {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceStyleguideStyleguideUnlinkedEvent
     */
    event: 'workspace.styleguide';
    /**
     * 
     * @type {string}
     * @memberof WorkspaceStyleguideStyleguideUnlinkedEvent
     */
    action: 'styleguide_unlinked';
    /**
     * 
     * @type {number}
     * @memberof WorkspaceStyleguideStyleguideUnlinkedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {WorkspaceStyleguideCreatedEventResource}
     * @memberof WorkspaceStyleguideStyleguideUnlinkedEvent
     */
    resource: WorkspaceStyleguideCreatedEventResource;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof WorkspaceStyleguideStyleguideUnlinkedEvent
     */
    actor: WebhookEventActor;
}


