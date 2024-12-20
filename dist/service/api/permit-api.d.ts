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
import type { PermitSingle } from '../model';
/**
 * PermitApi - axios parameter creator
 * @export
 */
export declare const PermitApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get permit for single token
     * @summary Get permit for single token
     * @param {string} token Ethereum address of the token
     * @param {string} user Ethereum address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSingleTokenPermit: (token: string, user: string, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * PermitApi - functional programming interface
 * @export
 */
export declare const PermitApiFp: (configuration?: Configuration) => {
    /**
     * Get permit for single token
     * @summary Get permit for single token
     * @param {string} token Ethereum address of the token
     * @param {string} user Ethereum address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSingleTokenPermit(token: string, user: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PermitSingle>>;
};
/**
 * PermitApi - factory interface
 * @export
 */
export declare const PermitApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get permit for single token
     * @summary Get permit for single token
     * @param {string} token Ethereum address of the token
     * @param {string} user Ethereum address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSingleTokenPermit(token: string, user: string, options?: RawAxiosRequestConfig): AxiosPromise<PermitSingle>;
};
/**
 * PermitApi - interface
 * @export
 * @interface PermitApi
 */
export interface PermitApiInterface {
    /**
     * Get permit for single token
     * @summary Get permit for single token
     * @param {string} token Ethereum address of the token
     * @param {string} user Ethereum address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermitApiInterface
     */
    getSingleTokenPermit(token: string, user: string, options?: RawAxiosRequestConfig): AxiosPromise<PermitSingle>;
}
/**
 * PermitApi - object-oriented interface
 * @export
 * @class PermitApi
 * @extends {BaseAPI}
 */
export declare class PermitApi extends BaseAPI implements PermitApiInterface {
    /**
     * Get permit for single token
     * @summary Get permit for single token
     * @param {string} token Ethereum address of the token
     * @param {string} user Ethereum address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermitApi
     */
    getSingleTokenPermit(token: string, user: string, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<PermitSingle, any>>;
}
//# sourceMappingURL=permit-api.d.ts.map