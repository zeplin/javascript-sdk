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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosResponse } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import {
    Project,
    transformProjectToJSON,
    transformJSONToProject
} from '../models';
// @ts-ignore
import {
    ProjectStatusEnum,
    transformProjectStatusEnumToJSON,
    transformJSONToProjectStatusEnum
} from '../models';
// @ts-ignore
import {
    Styleguide,
    transformStyleguideToJSON,
    transformJSONToStyleguide
} from '../models';
// @ts-ignore
import {
    StyleguideStatusEnum,
    transformStyleguideStatusEnumToJSON,
    transformJSONToStyleguideStatusEnum
} from '../models';
// @ts-ignore
import {
    User,
    transformUserToJSON,
    transformJSONToUser
} from '../models';
/**
 * UsersApi - axios parameter creator
 * @export
 */
export const UsersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get current user\'s details
         * @summary Current user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCurrentUser: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/users/me`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

            // authentication PersonalAccessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all projects that belong to the current user
         * @summary Get personal projects
         * @param {number} [limit] Pagination limit
         * @param {number} [offset] Pagination offset
         * @param {ProjectStatusEnum} [status] Filter by status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserProjects: async (limit?: number, offset?: number, status?: ProjectStatusEnum, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/users/me/projects`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

            // authentication PersonalAccessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all styleguides that belong to the current user
         * @summary Get personal styleguides
         * @param {number} [limit] Pagination limit
         * @param {number} [offset] Pagination offset
         * @param {StyleguideStatusEnum} [status] Filter by status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserStyleguides: async (limit?: number, offset?: number, status?: StyleguideStatusEnum, options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/users/me/styleguides`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

            // authentication PersonalAccessToken required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UsersApi - functional programming interface
 * @export
 */
export const UsersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UsersApiAxiosParamCreator(configuration)
    return {
        /**
         * Get current user\'s details
         * @summary Current user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getCurrentUser(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getCurrentUser(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all projects that belong to the current user
         * @summary Get personal projects
         * @param {number} [limit] Pagination limit
         * @param {number} [offset] Pagination offset
         * @param {ProjectStatusEnum} [status] Filter by status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserProjects(limit?: number, offset?: number, status?: ProjectStatusEnum, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserProjects(limit, offset, status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all styleguides that belong to the current user
         * @summary Get personal styleguides
         * @param {number} [limit] Pagination limit
         * @param {number} [offset] Pagination offset
         * @param {StyleguideStatusEnum} [status] Filter by status
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserStyleguides(limit?: number, offset?: number, status?: StyleguideStatusEnum, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<any>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserStyleguides(limit, offset, status, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};



/**
 * Search parameters for getUserProjects operation in UsersApi.
 * @export
 * @interface UsersApiGetUserProjectsSearchParams
 */
export interface UsersApiGetUserProjectsSearchParams {
    /**
     * Pagination limit
     * @type {number}
     * @memberof UsersApiGetUserProjectsSearchParams
     */
    readonly limit?: number;

    /**
     * Pagination offset
     * @type {number}
     * @memberof UsersApiGetUserProjectsSearchParams
     */
    readonly offset?: number;

    /**
     * Filter by status
     * @type {ProjectStatusEnum}
     * @memberof UsersApiGetUserProjectsSearchParams
     */
    readonly status?: ProjectStatusEnum;
}

/**
 * Search parameters for getUserStyleguides operation in UsersApi.
 * @export
 * @interface UsersApiGetUserStyleguidesSearchParams
 */
export interface UsersApiGetUserStyleguidesSearchParams {
    /**
     * Pagination limit
     * @type {number}
     * @memberof UsersApiGetUserStyleguidesSearchParams
     */
    readonly limit?: number;

    /**
     * Pagination offset
     * @type {number}
     * @memberof UsersApiGetUserStyleguidesSearchParams
     */
    readonly offset?: number;

    /**
     * Filter by status
     * @type {StyleguideStatusEnum}
     * @memberof UsersApiGetUserStyleguidesSearchParams
     */
    readonly status?: StyleguideStatusEnum;
}


/**
 * UsersApi - object-oriented interface
 * @export
 * @class UsersApi
 * @extends {BaseAPI}
 */
export class UsersApi extends BaseAPI {
    /**
     * Get current user\'s details
     * @summary Current user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public async getCurrentUser(options?: any) : Promise<AxiosResponse<User>> {
        const usersApiFp = UsersApiFp(this.configuration);
        const request = await usersApiFp.getCurrentUser(options);
        const response = await request(this.axios, this.basePath);
        return {
            ...response,
            data: transformJSONToUser(response.data)
        };
    }

    /**
     * List all projects that belong to the current user
     * @summary Get personal projects
     * @param {UsersApiGetUserProjectsSearchParams} [searchParams] Search parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public async getUserProjects(searchParams: UsersApiGetUserProjectsSearchParams = {}, options?: any) : Promise<AxiosResponse<Array<Project>>> {
        const usersApiFp = UsersApiFp(this.configuration);
        const request = await usersApiFp.getUserProjects(searchParams.limit, searchParams.offset, searchParams.status, options);
        const response = await request(this.axios, this.basePath);
        return {
            ...response,
            data: response.data.map(transformJSONToProject)
        };
    }

    /**
     * List all styleguides that belong to the current user
     * @summary Get personal styleguides
     * @param {UsersApiGetUserStyleguidesSearchParams} [searchParams] Search parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UsersApi
     */
    public async getUserStyleguides(searchParams: UsersApiGetUserStyleguidesSearchParams = {}, options?: any) : Promise<AxiosResponse<Array<Styleguide>>> {
        const usersApiFp = UsersApiFp(this.configuration);
        const request = await usersApiFp.getUserStyleguides(searchParams.limit, searchParams.offset, searchParams.status, options);
        const response = await request(this.axios, this.basePath);
        return {
            ...response,
            data: response.data.map(transformJSONToStyleguide)
        };
    }
}