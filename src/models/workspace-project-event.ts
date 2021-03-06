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
    WorkspaceProjectActivatedEvent,
    transformWorkspaceProjectActivatedEventToJSON,
    transformJSONToWorkspaceProjectActivatedEvent
} from './workspace-project-activated-event';
import {
    WorkspaceProjectArchivedEvent,
    transformWorkspaceProjectArchivedEventToJSON,
    transformJSONToWorkspaceProjectArchivedEvent
} from './workspace-project-archived-event';
import {
    WorkspaceProjectCreatedEvent,
    transformWorkspaceProjectCreatedEventToJSON,
    transformJSONToWorkspaceProjectCreatedEvent
} from './workspace-project-created-event';
import {
    WorkspaceProjectCreatedEventResource,
    transformWorkspaceProjectCreatedEventResourceToJSON,
    transformJSONToWorkspaceProjectCreatedEventResource
} from './workspace-project-created-event-resource';
import {
    WorkspaceProjectDeletedEvent,
    transformWorkspaceProjectDeletedEventToJSON,
    transformJSONToWorkspaceProjectDeletedEvent
} from './workspace-project-deleted-event';
import {
    WorkspaceProjectStyleguideLinkedEvent,
    transformWorkspaceProjectStyleguideLinkedEventToJSON,
    transformJSONToWorkspaceProjectStyleguideLinkedEvent
} from './workspace-project-styleguide-linked-event';
import {
    WorkspaceProjectStyleguideUnlinkedEvent,
    transformWorkspaceProjectStyleguideUnlinkedEventToJSON,
    transformJSONToWorkspaceProjectStyleguideUnlinkedEvent
} from './workspace-project-styleguide-unlinked-event';
import {
    WorkspaceProjectUpdatedEvent,
    transformWorkspaceProjectUpdatedEventToJSON,
    transformJSONToWorkspaceProjectUpdatedEvent
} from './workspace-project-updated-event';


export const transformJSONToWorkspaceProjectEvent = function (value: any): WorkspaceProjectEvent {
    switch (value.action) {
        case 'activated':
            return transformJSONToWorkspaceProjectActivatedEvent(value);
        case 'archived':
            return transformJSONToWorkspaceProjectArchivedEvent(value);
        case 'created':
            return transformJSONToWorkspaceProjectCreatedEvent(value);
        case 'deleted':
            return transformJSONToWorkspaceProjectDeletedEvent(value);
        case 'styleguide_linked':
            return transformJSONToWorkspaceProjectStyleguideLinkedEvent(value);
        case 'styleguide_unlinked':
            return transformJSONToWorkspaceProjectStyleguideUnlinkedEvent(value);
        case 'updated':
            return transformJSONToWorkspaceProjectUpdatedEvent(value);
        default:
            throw new Error(`No variant of WorkspaceProjectEvent exists with 'action=${ value.action }'`);
    }
}

export const transformWorkspaceProjectEventToJSON = function (value: WorkspaceProjectEvent): any {
    switch (value.action) {
        case 'activated':
            return transformWorkspaceProjectActivatedEventToJSON(value);
        case 'archived':
            return transformWorkspaceProjectArchivedEventToJSON(value);
        case 'created':
            return transformWorkspaceProjectCreatedEventToJSON(value);
        case 'deleted':
            return transformWorkspaceProjectDeletedEventToJSON(value);
        case 'styleguide_linked':
            return transformWorkspaceProjectStyleguideLinkedEventToJSON(value);
        case 'styleguide_unlinked':
            return transformWorkspaceProjectStyleguideUnlinkedEventToJSON(value);
        case 'updated':
            return transformWorkspaceProjectUpdatedEventToJSON(value);
    }
}

/**
 * @type WorkspaceProjectEvent
 * This event is used to notify webhooks about changes directly related to Zeplin projects:  - Project is created or deleted  - Project\'s linked styleguide changes  - Any of these properties change:    - name    - description    - density scale (1x, 2x, etc.)    - thumbnail image    - status (archived or activated)    - rem preferences (web projects only)\" 
 * @export
 */
export type WorkspaceProjectEvent = WorkspaceProjectActivatedEvent | WorkspaceProjectArchivedEvent | WorkspaceProjectCreatedEvent | WorkspaceProjectDeletedEvent | WorkspaceProjectStyleguideLinkedEvent | WorkspaceProjectStyleguideUnlinkedEvent | WorkspaceProjectUpdatedEvent;


