/* tslint:disable */
/* eslint-disable */
/**
 * Zarban Wallet API
 * API for Zarban wallet services.
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
import type { SwapRequest } from '../model';
// @ts-ignore
import type { SwapResponse } from '../model';
/**
 * SwapApi - axios parameter creator
 * @export
 */
export const SwapApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Swap coins in the wallet.
         * @summary Swap coins
         * @param {SwapRequest} swapRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        swapCoins: async (swapRequest: SwapRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'swapRequest' is not null or undefined
            assertParamExists('swapCoins', 'swapRequest', swapRequest)
            const localVarPath = `/swap`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(swapRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SwapApi - functional programming interface
 * @export
 */
export const SwapApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SwapApiAxiosParamCreator(configuration)
    return {
        /**
         * Swap coins in the wallet.
         * @summary Swap coins
         * @param {SwapRequest} swapRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async swapCoins(swapRequest: SwapRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SwapResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.swapCoins(swapRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SwapApi.swapCoins']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SwapApi - factory interface
 * @export
 */
export const SwapApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SwapApiFp(configuration)
    return {
        /**
         * Swap coins in the wallet.
         * @summary Swap coins
         * @param {SwapRequest} swapRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        swapCoins(swapRequest: SwapRequest, options?: RawAxiosRequestConfig): AxiosPromise<SwapResponse> {
            return localVarFp.swapCoins(swapRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SwapApi - interface
 * @export
 * @interface SwapApi
 */
export interface SwapApiInterface {
    /**
     * Swap coins in the wallet.
     * @summary Swap coins
     * @param {SwapRequest} swapRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SwapApiInterface
     */
    swapCoins(swapRequest: SwapRequest, options?: RawAxiosRequestConfig): AxiosPromise<SwapResponse>;

}

/**
 * SwapApi - object-oriented interface
 * @export
 * @class SwapApi
 * @extends {BaseAPI}
 */
export class SwapApi extends BaseAPI implements SwapApiInterface {
    /**
     * Swap coins in the wallet.
     * @summary Swap coins
     * @param {SwapRequest} swapRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SwapApi
     */
    public swapCoins(swapRequest: SwapRequest, options?: RawAxiosRequestConfig) {
        return SwapApiFp(this.configuration).swapCoins(swapRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

