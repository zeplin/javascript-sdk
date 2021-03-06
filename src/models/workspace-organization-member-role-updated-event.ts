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
    WorkspaceOrganizationMemberEventContext,
    transformWorkspaceOrganizationMemberEventContextToJSON,
    transformJSONToWorkspaceOrganizationMemberEventContext
} from './workspace-organization-member-event-context';
import {
    WorkspaceOrganizationMemberInvitedEventResource,
    transformWorkspaceOrganizationMemberInvitedEventResourceToJSON,
    transformJSONToWorkspaceOrganizationMemberInvitedEventResource
} from './workspace-organization-member-invited-event-resource';


export const transformWorkspaceOrganizationMemberRoleUpdatedEventToJSON = function (value: WorkspaceOrganizationMemberRoleUpdatedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformWorkspaceOrganizationMemberInvitedEventResourceToJSON(value.resource),
        context: transformWorkspaceOrganizationMemberEventContextToJSON(value.context),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToWorkspaceOrganizationMemberRoleUpdatedEvent = function (value: any): WorkspaceOrganizationMemberRoleUpdatedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToWorkspaceOrganizationMemberInvitedEventResource(value.resource),
        context: transformJSONToWorkspaceOrganizationMemberEventContext(value.context),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface WorkspaceOrganizationMemberRoleUpdatedEvent
 */
export interface WorkspaceOrganizationMemberRoleUpdatedEvent {
    /**
     * 
     * @type {string}
     * @memberof WorkspaceOrganizationMemberRoleUpdatedEvent
     */
    event: 'workspace.organization.member';
    /**
     * 
     * @type {string}
     * @memberof WorkspaceOrganizationMemberRoleUpdatedEvent
     */
    action: 'role_updated';
    /**
     * 
     * @type {number}
     * @memberof WorkspaceOrganizationMemberRoleUpdatedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {WorkspaceOrganizationMemberInvitedEventResource}
     * @memberof WorkspaceOrganizationMemberRoleUpdatedEvent
     */
    resource: WorkspaceOrganizationMemberInvitedEventResource;
    /**
     * 
     * @type {WorkspaceOrganizationMemberEventContext}
     * @memberof WorkspaceOrganizationMemberRoleUpdatedEvent
     */
    context: WorkspaceOrganizationMemberEventContext;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof WorkspaceOrganizationMemberRoleUpdatedEvent
     */
    actor: WebhookEventActor;
}


