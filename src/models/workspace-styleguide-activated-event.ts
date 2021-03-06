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


export const transformWorkspaceStyleguideActivatedEventToJSON = function (value: WorkspaceStyleguideActivatedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformWorkspaceStyleguideCreatedEventResourceToJSON(value.resource),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToWorkspaceStyleguideActivatedEvent = function (value: any): WorkspaceStyleguideActivatedEvent {
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
 * @interface WorkspaceStyleguideActivatedEvent
 */
export interface WorkspaceStyleguideActivatedEvent {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceStyleguideActivatedEvent
     */
    event: 'workspace.styleguide';
    /**
     * 
     * @type {string}
     * @memberof WorkspaceStyleguideActivatedEvent
     */
    action: 'activated';
    /**
     * 
     * @type {number}
     * @memberof WorkspaceStyleguideActivatedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {WorkspaceStyleguideCreatedEventResource}
     * @memberof WorkspaceStyleguideActivatedEvent
     */
    resource: WorkspaceStyleguideCreatedEventResource;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof WorkspaceStyleguideActivatedEvent
     */
    actor: WebhookEventActor;
}


