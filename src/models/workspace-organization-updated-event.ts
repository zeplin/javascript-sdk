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
    WorkspaceOrganizationUpdatedEventResource,
    transformWorkspaceOrganizationUpdatedEventResourceToJSON,
    transformJSONToWorkspaceOrganizationUpdatedEventResource
} from './workspace-organization-updated-event-resource';


export const transformWorkspaceOrganizationUpdatedEventToJSON = function (value: WorkspaceOrganizationUpdatedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformWorkspaceOrganizationUpdatedEventResourceToJSON(value.resource),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToWorkspaceOrganizationUpdatedEvent = function (value: any): WorkspaceOrganizationUpdatedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToWorkspaceOrganizationUpdatedEventResource(value.resource),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface WorkspaceOrganizationUpdatedEvent
 */
export interface WorkspaceOrganizationUpdatedEvent {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceOrganizationUpdatedEvent
     */
    event: 'workspace.organization';
    /**
     * 
     * @type {string}
     * @memberof WorkspaceOrganizationUpdatedEvent
     */
    action: 'updated';
    /**
     * 
     * @type {number}
     * @memberof WorkspaceOrganizationUpdatedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {WorkspaceOrganizationUpdatedEventResource}
     * @memberof WorkspaceOrganizationUpdatedEvent
     */
    resource: WorkspaceOrganizationUpdatedEventResource;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof WorkspaceOrganizationUpdatedEvent
     */
    actor: WebhookEventActor;
}


