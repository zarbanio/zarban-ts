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
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, BaseAPI, operationServerMap } from '../base';
/**
 * SwapApi - axios parameter creator
 * @export
 */
export const SwapApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Swap coins in the wallet.
         * @summary Swap coins
         * @param {SwapRequest} swapRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        swapCoins: async (swapRequest, options = {}) => {
            // verify required parameter 'swapRequest' is not null or undefined
            assertParamExists('swapCoins', 'swapRequest', swapRequest);
            const localVarPath = `/swap`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = serializeDataIfNeeded(swapRequest, localVarRequestOptions, configuration);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
/**
 * SwapApi - functional programming interface
 * @export
 */
export const SwapApiFp = function (configuration) {
    const localVarAxiosParamCreator = SwapApiAxiosParamCreator(configuration);
    return {
        /**
         * Swap coins in the wallet.
         * @summary Swap coins
         * @param {SwapRequest} swapRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async swapCoins(swapRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.swapCoins(swapRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SwapApi.swapCoins']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
/**
 * SwapApi - factory interface
 * @export
 */
export const SwapApiFactory = function (configuration, basePath, axios) {
    const localVarFp = SwapApiFp(configuration);
    return {
        /**
         * Swap coins in the wallet.
         * @summary Swap coins
         * @param {SwapRequest} swapRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        swapCoins(swapRequest, options) {
            return localVarFp.swapCoins(swapRequest, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * SwapApi - object-oriented interface
 * @export
 * @class SwapApi
 * @extends {BaseAPI}
 */
export class SwapApi extends BaseAPI {
    /**
     * Swap coins in the wallet.
     * @summary Swap coins
     * @param {SwapRequest} swapRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SwapApi
     */
    swapCoins(swapRequest, options) {
        return SwapApiFp(this.configuration).swapCoins(swapRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
//# sourceMappingURL=swap-api.js.map