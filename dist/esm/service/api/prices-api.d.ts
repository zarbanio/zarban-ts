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
import { type RequestArgs, BaseAPI } from '../base';
import type { PriceListResponse } from '../model';
/**
 * PricesApi - axios parameter creator
 * @export
 */
export declare const PricesApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Retrieve a list of price details based on specified query parameters
     * @summary List prices based on query parameters
     * @param {string} [symbol] Symbol of the price
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPrices: (symbol?: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * PricesApi - functional programming interface
 * @export
 */
export declare const PricesApiFp: (configuration?: Configuration) => {
    /**
     * Retrieve a list of price details based on specified query parameters
     * @summary List prices based on query parameters
     * @param {string} [symbol] Symbol of the price
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPrices(symbol?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PriceListResponse>>;
};
/**
 * PricesApi - factory interface
 * @export
 */
export declare const PricesApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Retrieve a list of price details based on specified query parameters
     * @summary List prices based on query parameters
     * @param {string} [symbol] Symbol of the price
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listPrices(symbol?: string, options?: RawAxiosRequestConfig): AxiosPromise<PriceListResponse>;
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
export declare class PricesApi extends BaseAPI implements PricesApiInterface {
    /**
     * Retrieve a list of price details based on specified query parameters
     * @summary List prices based on query parameters
     * @param {string} [symbol] Symbol of the price
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PricesApi
     */
    listPrices(symbol?: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PriceListResponse, any>>;
}
//# sourceMappingURL=prices-api.d.ts.map