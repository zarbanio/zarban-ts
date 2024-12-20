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
/**
 * WebsocketApi - axios parameter creator
 * @export
 */
export const WebsocketApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Upgrade to websocket connection
         * @summary Websocket Upgrade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUnfilledOrdersWebsocket: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/ws`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
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
 * WebsocketApi - functional programming interface
 * @export
 */
export const WebsocketApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WebsocketApiAxiosParamCreator(configuration)
    return {
        /**
         * Upgrade to websocket connection
         * @summary Websocket Upgrade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUnfilledOrdersWebsocket(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUnfilledOrdersWebsocket(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['WebsocketApi.getUnfilledOrdersWebsocket']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * WebsocketApi - factory interface
 * @export
 */
export const WebsocketApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WebsocketApiFp(configuration)
    return {
        /**
         * Upgrade to websocket connection
         * @summary Websocket Upgrade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUnfilledOrdersWebsocket(options?: RawAxiosRequestConfig): AxiosPromise<void> {
            return localVarFp.getUnfilledOrdersWebsocket(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * WebsocketApi - interface
 * @export
 * @interface WebsocketApi
 */
export interface WebsocketApiInterface {
    /**
     * Upgrade to websocket connection
     * @summary Websocket Upgrade
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebsocketApiInterface
     */
    getUnfilledOrdersWebsocket(options?: RawAxiosRequestConfig): AxiosPromise<void>;

}

/**
 * WebsocketApi - object-oriented interface
 * @export
 * @class WebsocketApi
 * @extends {BaseAPI}
 */
export class WebsocketApi extends BaseAPI implements WebsocketApiInterface {
    /**
     * Upgrade to websocket connection
     * @summary Websocket Upgrade
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebsocketApi
     */
    public getUnfilledOrdersWebsocket(options?: RawAxiosRequestConfig) {
        return WebsocketApiFp(this.configuration).getUnfilledOrdersWebsocket(options).then((request) => request(this.axios, this.basePath));
    }
}

