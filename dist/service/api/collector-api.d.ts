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
import { type RequestArgs, BaseAPI } from '../base';
import type { Stats } from '../model';
/**
 * CollectorApi - axios parameter creator
 * @export
 */
export declare const CollectorApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get collector data
     * @summary Get collector data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollectorData: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * CollectorApi - functional programming interface
 * @export
 */
export declare const CollectorApiFp: (configuration?: Configuration) => {
    /**
     * Get collector data
     * @summary Get collector data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollectorData(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Stats>>;
};
/**
 * CollectorApi - factory interface
 * @export
 */
export declare const CollectorApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get collector data
     * @summary Get collector data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCollectorData(options?: RawAxiosRequestConfig): AxiosPromise<Stats>;
};
/**
 * CollectorApi - interface
 * @export
 * @interface CollectorApi
 */
export interface CollectorApiInterface {
    /**
     * Get collector data
     * @summary Get collector data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectorApiInterface
     */
    getCollectorData(options?: RawAxiosRequestConfig): AxiosPromise<Stats>;
}
/**
 * CollectorApi - object-oriented interface
 * @export
 * @class CollectorApi
 * @extends {BaseAPI}
 */
export declare class CollectorApi extends BaseAPI implements CollectorApiInterface {
    /**
     * Get collector data
     * @summary Get collector data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CollectorApi
     */
    getCollectorData(options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<Stats, any>>;
}
//# sourceMappingURL=collector-api.d.ts.map