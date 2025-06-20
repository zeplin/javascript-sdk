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
    ProjectNoteCommentReactionCreatedEvent,
    transformProjectNoteCommentReactionCreatedEventToJSON,
    transformJSONToProjectNoteCommentReactionCreatedEvent
} from './project-note-comment-reaction-created-event';
import {
    ProjectNoteCommentReactionDeletedEvent,
    transformProjectNoteCommentReactionDeletedEventToJSON,
    transformJSONToProjectNoteCommentReactionDeletedEvent
} from './project-note-comment-reaction-deleted-event';
import {
    ProjectNoteCommentReactionDeletedEventResource,
    transformProjectNoteCommentReactionDeletedEventResourceToJSON,
    transformJSONToProjectNoteCommentReactionDeletedEventResource
} from './project-note-comment-reaction-deleted-event-resource';
import {
    ProjectNoteCommentReactionEventContext,
    transformProjectNoteCommentReactionEventContextToJSON,
    transformJSONToProjectNoteCommentReactionEventContext
} from './project-note-comment-reaction-event-context';
import {
    WebhookEventActor,
    transformWebhookEventActorToJSON,
    transformJSONToWebhookEventActor
} from './webhook-event-actor';


export const transformJSONToProjectNoteCommentReactionEvent = function (value: any): ProjectNoteCommentReactionEvent {
    switch (value.action) {
        case 'created':
            return transformJSONToProjectNoteCommentReactionCreatedEvent(value);
        case 'deleted':
            return transformJSONToProjectNoteCommentReactionDeletedEvent(value);
        default:
            throw new Error(`No variant of ProjectNoteCommentReactionEvent exists with 'action=${ value.action }'`);
    }
}

export const transformProjectNoteCommentReactionEventToJSON = function (value: ProjectNoteCommentReactionEvent): any {
    switch (value.action) {
        case 'created':
            return transformProjectNoteCommentReactionCreatedEventToJSON(value);
        case 'deleted':
            return transformProjectNoteCommentReactionDeletedEventToJSON(value);
    }
}

/**
 * @type ProjectNoteCommentReactionEvent
 * This event is used to notify webhooks about reactions to comments in notes in Zeplin projects.
 * @export
 */
export type ProjectNoteCommentReactionEvent = ProjectNoteCommentReactionCreatedEvent | ProjectNoteCommentReactionDeletedEvent;


