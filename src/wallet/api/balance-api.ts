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
import type { Balance } from '../model';
// @ts-ignore
import type { Symbol } from '../model';
// @ts-ignore
import type { WalletBalance } from '../model';
/**
 * BalanceApi - axios parameter creator
 * @export
 */
export const BalanceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Get the balance by a symbol.
         * @summary Get balance
         * @param {Symbol} symbol Coin symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBalanceBySymbol: async (symbol: Symbol, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'symbol' is not null or undefined
            assertParamExists('getBalanceBySymbol', 'symbol', symbol)
            const localVarPath = `/balance/{symbol}`
                .replace(`{${"symbol"}}`, encodeURIComponent(String(symbol)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the balance of the wallet.
         * @summary Get wallet balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWalletBalance: async (options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/balance`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
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
 * BalanceApi - functional programming interface
 * @export
 */
export const BalanceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BalanceApiAxiosParamCreator(configuration)
    return {
        /**
         * Get the balance by a symbol.
         * @summary Get balance
         * @param {Symbol} symbol Coin symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getBalanceBySymbol(symbol: Symbol, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Balance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getBalanceBySymbol(symbol, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BalanceApi.getBalanceBySymbol']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get the balance of the wallet.
         * @summary Get wallet balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getWalletBalance(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WalletBalance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getWalletBalance(options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['BalanceApi.getWalletBalance']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * BalanceApi - factory interface
 * @export
 */
export const BalanceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BalanceApiFp(configuration)
    return {
        /**
         * Get the balance by a symbol.
         * @summary Get balance
         * @param {Symbol} symbol Coin symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getBalanceBySymbol(symbol: Symbol, options?: RawAxiosRequestConfig): AxiosPromise<Balance> {
            return localVarFp.getBalanceBySymbol(symbol, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the balance of the wallet.
         * @summary Get wallet balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWalletBalance(options?: RawAxiosRequestConfig): AxiosPromise<WalletBalance> {
            return localVarFp.getWalletBalance(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BalanceApi - interface
 * @export
 * @interface BalanceApi
 */
export interface BalanceApiInterface {
    /**
     * Get the balance by a symbol.
     * @summary Get balance
     * @param {Symbol} symbol Coin symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BalanceApiInterface
     */
    getBalanceBySymbol(symbol: Symbol, options?: RawAxiosRequestConfig): AxiosPromise<Balance>;

    /**
     * Get the balance of the wallet.
     * @summary Get wallet balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BalanceApiInterface
     */
    getWalletBalance(options?: RawAxiosRequestConfig): AxiosPromise<WalletBalance>;

}

/**
 * BalanceApi - object-oriented interface
 * @export
 * @class BalanceApi
 * @extends {BaseAPI}
 */
export class BalanceApi extends BaseAPI implements BalanceApiInterface {
    /**
     * Get the balance by a symbol.
     * @summary Get balance
     * @param {Symbol} symbol Coin symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BalanceApi
     */
    public getBalanceBySymbol(symbol: Symbol, options?: RawAxiosRequestConfig) {
        return BalanceApiFp(this.configuration).getBalanceBySymbol(symbol, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Get the balance of the wallet.
     * @summary Get wallet balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BalanceApi
     */
    public getWalletBalance(options?: RawAxiosRequestConfig) {
        return BalanceApiFp(this.configuration).getWalletBalance(options).then((request) => request(this.axios, this.basePath));
    }
}
