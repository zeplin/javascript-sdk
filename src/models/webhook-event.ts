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
    PingEvent,
    transformPingEventToJSON,
    transformJSONToPingEvent
} from './ping-event';
import {
    ProjectColorEvent,
    transformProjectColorEventToJSON,
    transformJSONToProjectColorEvent
} from './project-color-event';
import {
    ProjectComponentEvent,
    transformProjectComponentEventToJSON,
    transformJSONToProjectComponentEvent
} from './project-component-event';
import {
    ProjectMemberEvent,
    transformProjectMemberEventToJSON,
    transformJSONToProjectMemberEvent
} from './project-member-event';
import {
    ProjectNoteCommentEvent,
    transformProjectNoteCommentEventToJSON,
    transformJSONToProjectNoteCommentEvent
} from './project-note-comment-event';
import {
    ProjectNoteEvent,
    transformProjectNoteEventToJSON,
    transformJSONToProjectNoteEvent
} from './project-note-event';
import {
    ProjectScreenEvent,
    transformProjectScreenEventToJSON,
    transformJSONToProjectScreenEvent
} from './project-screen-event';
import {
    ProjectScreenVersionEvent,
    transformProjectScreenVersionEventToJSON,
    transformJSONToProjectScreenVersionEvent
} from './project-screen-version-event';
import {
    ProjectSpacingTokenEvent,
    transformProjectSpacingTokenEventToJSON,
    transformJSONToProjectSpacingTokenEvent
} from './project-spacing-token-event';
import {
    ProjectTextStyleEvent,
    transformProjectTextStyleEventToJSON,
    transformJSONToProjectTextStyleEvent
} from './project-text-style-event';
import {
    StyleguideColorEvent,
    transformStyleguideColorEventToJSON,
    transformJSONToStyleguideColorEvent
} from './styleguide-color-event';
import {
    StyleguideComponentEvent,
    transformStyleguideComponentEventToJSON,
    transformJSONToStyleguideComponentEvent
} from './styleguide-component-event';
import {
    StyleguideMemberEvent,
    transformStyleguideMemberEventToJSON,
    transformJSONToStyleguideMemberEvent
} from './styleguide-member-event';
import {
    StyleguideSpacingTokenEvent,
    transformStyleguideSpacingTokenEventToJSON,
    transformJSONToStyleguideSpacingTokenEvent
} from './styleguide-spacing-token-event';
import {
    StyleguideTextStyleEvent,
    transformStyleguideTextStyleEventToJSON,
    transformJSONToStyleguideTextStyleEvent
} from './styleguide-text-style-event';
import {
    WebhookEventActor,
    transformWebhookEventActorToJSON,
    transformJSONToWebhookEventActor
} from './webhook-event-actor';
import {
    WorkspaceNotificationEvent,
    transformWorkspaceNotificationEventToJSON,
    transformJSONToWorkspaceNotificationEvent
} from './workspace-notification-event';
import {
    WorkspaceOrganizationEvent,
    transformWorkspaceOrganizationEventToJSON,
    transformJSONToWorkspaceOrganizationEvent
} from './workspace-organization-event';
import {
    WorkspaceOrganizationMemberEvent,
    transformWorkspaceOrganizationMemberEventToJSON,
    transformJSONToWorkspaceOrganizationMemberEvent
} from './workspace-organization-member-event';
import {
    WorkspaceProjectEvent,
    transformWorkspaceProjectEventToJSON,
    transformJSONToWorkspaceProjectEvent
} from './workspace-project-event';
import {
    WorkspaceStyleguideEvent,
    transformWorkspaceStyleguideEventToJSON,
    transformJSONToWorkspaceStyleguideEvent
} from './workspace-styleguide-event';


export const transformJSONToWebhookEvent = function (value: any): WebhookEvent {
    switch (value.event) {
        case 'ping':
            return transformJSONToPingEvent(value);
        case 'project.color':
            return transformJSONToProjectColorEvent(value);
        case 'project.component':
            return transformJSONToProjectComponentEvent(value);
        case 'project.member':
            return transformJSONToProjectMemberEvent(value);
        case 'project.note':
            return transformJSONToProjectNoteEvent(value);
        case 'project.note.comment':
            return transformJSONToProjectNoteCommentEvent(value);
        case 'project.screen':
            return transformJSONToProjectScreenEvent(value);
        case 'project.screen.version':
            return transformJSONToProjectScreenVersionEvent(value);
        case 'project.spacing_token':
            return transformJSONToProjectSpacingTokenEvent(value);
        case 'project.text_style':
            return transformJSONToProjectTextStyleEvent(value);
        case 'styleguide.color':
            return transformJSONToStyleguideColorEvent(value);
        case 'styleguide.component':
            return transformJSONToStyleguideComponentEvent(value);
        case 'styleguide.member':
            return transformJSONToStyleguideMemberEvent(value);
        case 'styleguide.spacing_token':
            return transformJSONToStyleguideSpacingTokenEvent(value);
        case 'styleguide.text_style':
            return transformJSONToStyleguideTextStyleEvent(value);
        case 'workspace.notification':
            return transformJSONToWorkspaceNotificationEvent(value);
        case 'workspace.organization':
            return transformJSONToWorkspaceOrganizationEvent(value);
        case 'workspace.organization.member':
            return transformJSONToWorkspaceOrganizationMemberEvent(value);
        case 'workspace.project':
            return transformJSONToWorkspaceProjectEvent(value);
        case 'workspace.styleguide':
            return transformJSONToWorkspaceStyleguideEvent(value);
        default:
            throw new Error(`No variant of WebhookEvent exists with 'event=${ value.event }'`);
    }
}

export const transformWebhookEventToJSON = function (value: WebhookEvent): any {
    switch (value.event) {
        case 'ping':
            return transformPingEventToJSON(value);
        case 'project.color':
            return transformProjectColorEventToJSON(value);
        case 'project.component':
            return transformProjectComponentEventToJSON(value);
        case 'project.member':
            return transformProjectMemberEventToJSON(value);
        case 'project.note':
            return transformProjectNoteEventToJSON(value);
        case 'project.note.comment':
            return transformProjectNoteCommentEventToJSON(value);
        case 'project.screen':
            return transformProjectScreenEventToJSON(value);
        case 'project.screen.version':
            return transformProjectScreenVersionEventToJSON(value);
        case 'project.spacing_token':
            return transformProjectSpacingTokenEventToJSON(value);
        case 'project.text_style':
            return transformProjectTextStyleEventToJSON(value);
        case 'styleguide.color':
            return transformStyleguideColorEventToJSON(value);
        case 'styleguide.component':
            return transformStyleguideComponentEventToJSON(value);
        case 'styleguide.member':
            return transformStyleguideMemberEventToJSON(value);
        case 'styleguide.spacing_token':
            return transformStyleguideSpacingTokenEventToJSON(value);
        case 'styleguide.text_style':
            return transformStyleguideTextStyleEventToJSON(value);
        case 'workspace.notification':
            return transformWorkspaceNotificationEventToJSON(value);
        case 'workspace.organization':
            return transformWorkspaceOrganizationEventToJSON(value);
        case 'workspace.organization.member':
            return transformWorkspaceOrganizationMemberEventToJSON(value);
        case 'workspace.project':
            return transformWorkspaceProjectEventToJSON(value);
        case 'workspace.styleguide':
            return transformWorkspaceStyleguideEventToJSON(value);
    }
}

/**
 * @type WebhookEvent
 * @export
 */
export type WebhookEvent = PingEvent | ProjectColorEvent | ProjectComponentEvent | ProjectMemberEvent | ProjectNoteCommentEvent | ProjectNoteEvent | ProjectScreenEvent | ProjectScreenVersionEvent | ProjectSpacingTokenEvent | ProjectTextStyleEvent | StyleguideColorEvent | StyleguideComponentEvent | StyleguideMemberEvent | StyleguideSpacingTokenEvent | StyleguideTextStyleEvent | WorkspaceNotificationEvent | WorkspaceOrganizationEvent | WorkspaceOrganizationMemberEvent | WorkspaceProjectEvent | WorkspaceStyleguideEvent;

