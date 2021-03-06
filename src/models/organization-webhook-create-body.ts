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
    OrganizationWebhookEventEnum,
    transformOrganizationWebhookEventEnumToJSON,
    transformJSONToOrganizationWebhookEventEnum
} from './organization-webhook-event-enum';
import {
    WebhookStatusEnum,
    transformWebhookStatusEnumToJSON,
    transformJSONToWebhookStatusEnum
} from './webhook-status-enum';


export const transformOrganizationWebhookCreateBodyToJSON = function (value: OrganizationWebhookCreateBody): any {
    return {
        url: value.url,
        name: value.name,
        secret: value.secret,
        status: value.status && transformWebhookStatusEnumToJSON(value.status),
        project_ids: [...value.projectIds],
        styleguide_ids: [...value.styleguideIds],
        events: [...value.events].map(transformOrganizationWebhookEventEnumToJSON)
    }
}

export const transformJSONToOrganizationWebhookCreateBody = function (value: any): OrganizationWebhookCreateBody {
    return {
        url: value.url,
        name: value.name,
        secret: value.secret,
        status: value.status && transformJSONToWebhookStatusEnum(value.status),
        projectIds: new Set(value.project_ids),
        styleguideIds: new Set(value.styleguide_ids),
        events: new Set(value.events.map(transformJSONToOrganizationWebhookEventEnum))
    }
}

/**
 * 
 * @export
 * @interface OrganizationWebhookCreateBody
 */
export interface OrganizationWebhookCreateBody {
    /**
     * The URL of the webhook
     * @type {string}
     * @memberof OrganizationWebhookCreateBody
     */
    url: string;
    /**
     * The name of the webhook
     * @type {string}
     * @memberof OrganizationWebhookCreateBody
     */
    name?: string;
    /**
     * The secret to be used to generate signatures for webhook requests
     * @type {string}
     * @memberof OrganizationWebhookCreateBody
     */
    secret: string;
    /**
     * 
     * @type {WebhookStatusEnum}
     * @memberof OrganizationWebhookCreateBody
     */
    status?: WebhookStatusEnum;
    /**
     * The project ids of the webhook
     * @type {Set<string>}
     * @memberof OrganizationWebhookCreateBody
     */
    projectIds: Set<string>;
    /**
     * The styleguide ids of the webhook
     * @type {Set<string>}
     * @memberof OrganizationWebhookCreateBody
     */
    styleguideIds: Set<string>;
    /**
     * The events of the webhook
     * @type {Set<OrganizationWebhookEventEnum>}
     * @memberof OrganizationWebhookCreateBody
     */
    events: Set<OrganizationWebhookEventEnum>;
}


