/* tslint:disable */
/* eslint-disable */
/**
 * Zarban API
 * API for Zarban services.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@zarban.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { UserDepositsResponse } from '../model';
/**
 * DepositsApi - axios parameter creator
 * @export
 */
export const DepositsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get user deposits of Lendingpool
         * @summary Get user deposits of Lendingpool
         * @param {string} [user] Ethereum address of the user
         * @param {string} [reserve] Ethereum address of the reserve
         * @param {number} [cursor] Cursor for pagination
         * @param {number} [limit] Limit the number of deposits returned (default is 50)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserDeposits: async (user?: string, reserve?: string, cursor?: number, limit?: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/lendingpool/deposits`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }

            if (reserve !== undefined) {
                localVarQueryParameter['reserve'] = reserve;
            }

            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
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
 * DepositsApi - functional programming interface
 * @export
 */
export const DepositsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DepositsApiAxiosParamCreator(configuration)
    return {
        /**
         * Get user deposits of Lendingpool
         * @summary Get user deposits of Lendingpool
         * @param {string} [user] Ethereum address of the user
         * @param {string} [reserve] Ethereum address of the reserve
         * @param {number} [cursor] Cursor for pagination
         * @param {number} [limit] Limit the number of deposits returned (default is 50)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserDeposits(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserDepositsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserDeposits(user, reserve, cursor, limit, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['DepositsApi.getUserDeposits']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * DepositsApi - factory interface
 * @export
 */
export const DepositsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DepositsApiFp(configuration)
    return {
        /**
         * Get user deposits of Lendingpool
         * @summary Get user deposits of Lendingpool
         * @param {string} [user] Ethereum address of the user
         * @param {string} [reserve] Ethereum address of the reserve
         * @param {number} [cursor] Cursor for pagination
         * @param {number} [limit] Limit the number of deposits returned (default is 50)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserDeposits(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<UserDepositsResponse> {
            return localVarFp.getUserDeposits(user, reserve, cursor, limit, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DepositsApi - interface
 * @export
 * @interface DepositsApi
 */
export interface DepositsApiInterface {
    /**
     * Get user deposits of Lendingpool
     * @summary Get user deposits of Lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DepositsApiInterface
     */
    getUserDeposits(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<UserDepositsResponse>;

}

/**
 * DepositsApi - object-oriented interface
 * @export
 * @class DepositsApi
 * @extends {BaseAPI}
 */
export class DepositsApi extends BaseAPI implements DepositsApiInterface {
    /**
     * Get user deposits of Lendingpool
     * @summary Get user deposits of Lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DepositsApi
     */
    public getUserDeposits(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig) {
        return DepositsApiFp(this.configuration).getUserDeposits(user, reserve, cursor, limit, options).then((request) => request(this.axios, this.basePath));
    }
}
