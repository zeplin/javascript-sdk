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
    ProjectSpacingTokenCreatedEvent,
    transformProjectSpacingTokenCreatedEventToJSON,
    transformJSONToProjectSpacingTokenCreatedEvent
} from './project-spacing-token-created-event';
import {
    ProjectSpacingTokenCreatedEventResource,
    transformProjectSpacingTokenCreatedEventResourceToJSON,
    transformJSONToProjectSpacingTokenCreatedEventResource
} from './project-spacing-token-created-event-resource';
import {
    ProjectSpacingTokenDeletedEvent,
    transformProjectSpacingTokenDeletedEventToJSON,
    transformJSONToProjectSpacingTokenDeletedEvent
} from './project-spacing-token-deleted-event';
import {
    ProjectSpacingTokenEventContext,
    transformProjectSpacingTokenEventContextToJSON,
    transformJSONToProjectSpacingTokenEventContext
} from './project-spacing-token-event-context';
import {
    ProjectSpacingTokenUpdatedEvent,
    transformProjectSpacingTokenUpdatedEventToJSON,
    transformJSONToProjectSpacingTokenUpdatedEvent
} from './project-spacing-token-updated-event';
import {
    WebhookEventActor,
    transformWebhookEventActorToJSON,
    transformJSONToWebhookEventActor
} from './webhook-event-actor';


export const transformJSONToProjectSpacingTokenEvent = function (value: any): ProjectSpacingTokenEvent {
    switch (value.action) {
        case 'created':
            return transformJSONToProjectSpacingTokenCreatedEvent(value);
        case 'deleted':
            return transformJSONToProjectSpacingTokenDeletedEvent(value);
        case 'updated':
            return transformJSONToProjectSpacingTokenUpdatedEvent(value);
        default:
            throw new Error(`No variant of ProjectSpacingTokenEvent exists with 'action=${ value.action }'`);
    }
}

export const transformProjectSpacingTokenEventToJSON = function (value: ProjectSpacingTokenEvent): any {
    switch (value.action) {
        case 'created':
            return transformProjectSpacingTokenCreatedEventToJSON(value);
        case 'deleted':
            return transformProjectSpacingTokenDeletedEventToJSON(value);
        case 'updated':
            return transformProjectSpacingTokenUpdatedEventToJSON(value);
    }
}

/**
 * @type ProjectSpacingTokenEvent
 * This event is used to notify webhooks about changes related to a spacing tokens in the local styleguide of Zeplin projects.
 * @export
 */
export type ProjectSpacingTokenEvent = ProjectSpacingTokenCreatedEvent | ProjectSpacingTokenDeletedEvent | ProjectSpacingTokenUpdatedEvent;

