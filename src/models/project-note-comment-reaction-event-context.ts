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
    Project,
    transformProjectToJSON,
    transformJSONToProject
} from './project';
import {
    Screen,
    transformScreenToJSON,
    transformJSONToScreen
} from './screen';
import {
    ScreenNote,
    transformScreenNoteToJSON,
    transformJSONToScreenNote
} from './screen-note';
import {
    ScreenNoteComment,
    transformScreenNoteCommentToJSON,
    transformJSONToScreenNoteComment
} from './screen-note-comment';


export const transformProjectNoteCommentReactionEventContextToJSON = function (value: ProjectNoteCommentReactionEventContext): any {
    return {
        project: transformProjectToJSON(value.project),
        screen: transformScreenToJSON(value.screen),
        note: transformScreenNoteToJSON(value.note),
        comment: transformScreenNoteCommentToJSON(value.comment)
    }
}

export const transformJSONToProjectNoteCommentReactionEventContext = function (value: any): ProjectNoteCommentReactionEventContext {
    return {
        project: transformJSONToProject(value.project),
        screen: transformJSONToScreen(value.screen),
        note: transformJSONToScreenNote(value.note),
        comment: transformJSONToScreenNoteComment(value.comment)
    }
}

/**
 * 
 * @export
 * @interface ProjectNoteCommentReactionEventContext
 */
export interface ProjectNoteCommentReactionEventContext {
    /**
     * 
     * @type {Project}
     * @memberof ProjectNoteCommentReactionEventContext
     */
    project: Project;
    /**
     * 
     * @type {Screen}
     * @memberof ProjectNoteCommentReactionEventContext
     */
    screen: Screen;
    /**
     * 
     * @type {ScreenNote}
     * @memberof ProjectNoteCommentReactionEventContext
     */
    note: ScreenNote;
    /**
     * 
     * @type {ScreenNoteComment}
     * @memberof ProjectNoteCommentReactionEventContext
     */
    comment: ScreenNoteComment;
}


