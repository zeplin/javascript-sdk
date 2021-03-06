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
    ProjectMemberEventContext,
    transformProjectMemberEventContextToJSON,
    transformJSONToProjectMemberEventContext
} from './project-member-event-context';
import {
    ProjectMemberRemovedEventResource,
    transformProjectMemberRemovedEventResourceToJSON,
    transformJSONToProjectMemberRemovedEventResource
} from './project-member-removed-event-resource';
import {
    WebhookEventActor,
    transformWebhookEventActorToJSON,
    transformJSONToWebhookEventActor
} from './webhook-event-actor';


export const transformProjectMemberRemovedEventToJSON = function (value: ProjectMemberRemovedEvent): any {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformProjectMemberRemovedEventResourceToJSON(value.resource),
        context: transformProjectMemberEventContextToJSON(value.context),
        actor: transformWebhookEventActorToJSON(value.actor)
    }
}

export const transformJSONToProjectMemberRemovedEvent = function (value: any): ProjectMemberRemovedEvent {
    return {
        event: value.event,
        action: value.action,
        timestamp: value.timestamp,
        resource: transformJSONToProjectMemberRemovedEventResource(value.resource),
        context: transformJSONToProjectMemberEventContext(value.context),
        actor: transformJSONToWebhookEventActor(value.actor)
    }
}

/**
 * 
 * @export
 * @interface ProjectMemberRemovedEvent
 */
export interface ProjectMemberRemovedEvent {
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberRemovedEvent
     */
    event: 'project.member';
    /**
     * 
     * @type {string}
     * @memberof ProjectMemberRemovedEvent
     */
    action: 'removed';
    /**
     * 
     * @type {number}
     * @memberof ProjectMemberRemovedEvent
     */
    timestamp: number;
    /**
     * 
     * @type {ProjectMemberRemovedEventResource}
     * @memberof ProjectMemberRemovedEvent
     */
    resource: ProjectMemberRemovedEventResource;
    /**
     * 
     * @type {ProjectMemberEventContext}
     * @memberof ProjectMemberRemovedEvent
     */
    context: ProjectMemberEventContext;
    /**
     * 
     * @type {WebhookEventActor}
     * @memberof ProjectMemberRemovedEvent
     */
    actor: WebhookEventActor;
}


