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


export const transformProjectNoteCommentEventContextToJSON = function (value: ProjectNoteCommentEventContext): any {
    return {
        project: transformProjectToJSON(value.project),
        screen: transformScreenToJSON(value.screen),
        note: transformScreenNoteToJSON(value.note)
    }
}

export const transformJSONToProjectNoteCommentEventContext = function (value: any): ProjectNoteCommentEventContext {
    return {
        project: transformJSONToProject(value.project),
        screen: transformJSONToScreen(value.screen),
        note: transformJSONToScreenNote(value.note)
    }
}

/**
 * 
 * @export
 * @interface ProjectNoteCommentEventContext
 */
export interface ProjectNoteCommentEventContext {
    /**
     * 
     * @type {Project}
     * @memberof ProjectNoteCommentEventContext
     */
    project: Project;
    /**
     * 
     * @type {Screen}
     * @memberof ProjectNoteCommentEventContext
     */
    screen: Screen;
    /**
     * 
     * @type {ScreenNote}
     * @memberof ProjectNoteCommentEventContext
     */
    note: ScreenNote;
}


