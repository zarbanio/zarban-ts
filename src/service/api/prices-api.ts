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
import type { PriceListResponse } from '../model';
/**
 * PricesApi - axios parameter creator
 * @export
 */
export const PricesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieve a list of price details based on specified query parameters
         * @summary List prices based on query parameters
         * @param {string} [symbol] Symbol of the price
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPrices: async (symbol?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v2/prices`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (symbol !== undefined) {
                localVarQueryParameter['symbol'] = symbol;
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
 * PricesApi - functional programming interface
 * @export
 */
export const PricesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PricesApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieve a list of price details based on specified query parameters
         * @summary List prices based on query parameters
         * @param {string} [symbol] Symbol of the price
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listPrices(symbol?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PriceListResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listPrices(symbol, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['PricesApi.listPrices']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * PricesApi - factory interface
 * @export
 */
export const PricesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PricesApiFp(configuration)
    return {
        /**
         * Retrieve a list of price details based on specified query parameters
         * @summary List prices based on query parameters
         * @param {string} [symbol] Symbol of the price
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPrices(symbol?: string, options?: RawAxiosRequestConfig): AxiosPromise<PriceListResponse> {
            return localVarFp.listPrices(symbol, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * PricesApi - interface
 * @export
 * @interface PricesApi
 */
export interface PricesApiInterface {
    /**
     * Retrieve a list of price details based on specified query parameters
     * @summary List prices based on query parameters
     * @param {string} [symbol] Symbol of the price
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PricesApiInterface
     */
    listPrices(symbol?: string, options?: RawAxiosRequestConfig): AxiosPromise<PriceListResponse>;

}

/**
 * PricesApi - object-oriented interface
 * @export
 * @class PricesApi
 * @extends {BaseAPI}
 */
export class PricesApi extends BaseAPI implements PricesApiInterface {
    /**
     * Retrieve a list of price details based on specified query parameters
     * @summary List prices based on query parameters
     * @param {string} [symbol] Symbol of the price
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PricesApi
     */
    public listPrices(symbol?: string, options?: RawAxiosRequestConfig) {
        return PricesApiFp(this.configuration).listPrices(symbol, options).then((request) => request(this.axios, this.basePath));
    }
}

