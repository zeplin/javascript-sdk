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
    TokenCreateAuthorizationCodeBody,
    transformTokenCreateAuthorizationCodeBodyToJSON,
    transformJSONToTokenCreateAuthorizationCodeBody
} from './token-create-authorization-code-body';
import {
    TokenCreateRefreshTokenBody,
    transformTokenCreateRefreshTokenBodyToJSON,
    transformJSONToTokenCreateRefreshTokenBody
} from './token-create-refresh-token-body';


export const transformJSONToTokenCreateBody = function (value: any): TokenCreateBody {
    switch (value.grant_type) {
        case 'authorization_code':
            return transformJSONToTokenCreateAuthorizationCodeBody(value);
        case 'refresh_token':
            return transformJSONToTokenCreateRefreshTokenBody(value);
        default:
            throw new Error(`No variant of TokenCreateBody exists with 'grantType=${ value.grantType }'`);
    }
}

export const transformTokenCreateBodyToJSON = function (value: TokenCreateBody): any {
    switch (value.grantType) {
        case 'authorization_code':
            return transformTokenCreateAuthorizationCodeBodyToJSON(value);
        case 'refresh_token':
            return transformTokenCreateRefreshTokenBodyToJSON(value);
    }
}

/**
 * @type TokenCreateBody
 * @export
 */
export type TokenCreateBody = TokenCreateAuthorizationCodeBody | TokenCreateRefreshTokenBody;


