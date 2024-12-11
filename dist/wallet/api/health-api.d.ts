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
import { type RequestArgs, BaseAPI } from '../base';
import type { HealthStatus } from '../model';
/**
 * HealthApi - axios parameter creator
 * @export
 */
export declare const HealthApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Check the health of the API.
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkApiHealth: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * HealthApi - functional programming interface
 * @export
 */
export declare const HealthApiFp: (configuration?: Configuration) => {
    /**
     * Check the health of the API.
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkApiHealth(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HealthStatus>>;
};
/**
 * HealthApi - factory interface
 * @export
 */
export declare const HealthApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Check the health of the API.
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    checkApiHealth(options?: RawAxiosRequestConfig): AxiosPromise<HealthStatus>;
};
/**
 * HealthApi - interface
 * @export
 * @interface HealthApi
 */
export interface HealthApiInterface {
    /**
     * Check the health of the API.
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApiInterface
     */
    checkApiHealth(options?: RawAxiosRequestConfig): AxiosPromise<HealthStatus>;
}
/**
 * HealthApi - object-oriented interface
 * @export
 * @class HealthApi
 * @extends {BaseAPI}
 */
export declare class HealthApi extends BaseAPI implements HealthApiInterface {
    /**
     * Check the health of the API.
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApi
     */
    checkApiHealth(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<HealthStatus, any>>;
}
