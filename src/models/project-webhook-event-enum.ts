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




export const transformProjectWebhookEventEnumToJSON = function (value: ProjectWebhookEventEnum): any {
    return value;
}

export const transformJSONToProjectWebhookEventEnum = function (value: any): ProjectWebhookEventEnum {
    return value;
}

/**
 * 
 * @export
 * @enum {string}
 */
export enum ProjectWebhookEventEnum {
    STAR = 'project.*',
    COLOR = 'project.color',
    COMPONENT = 'project.component',
    MEMBER = 'project.member',
    NOTE = 'project.note',
    NOTE_COMMENT = 'project.note.comment',
    NOTE_COMMENT_REACTION = 'project.note.comment.reaction',
    SCREEN = 'project.screen',
    SCREEN_VERSION = 'project.screen.version',
    SPACING_TOKEN = 'project.spacing_token',
    TEXT_STYLE = 'project.text_style',
    FLOW_BOARD = 'project.flow_board'
}


