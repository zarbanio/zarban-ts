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
import type { UserBorrowsResponse } from '../model';
/**
 * BorrowsApi - axios parameter creator
 * @export
 */
export declare const BorrowsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get user borrows of lendingpool
     * @summary Get user borrows of lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserBorrows: (user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * BorrowsApi - functional programming interface
 * @export
 */
export declare const BorrowsApiFp: (configuration?: Configuration) => {
    /**
     * Get user borrows of lendingpool
     * @summary Get user borrows of lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserBorrows(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserBorrowsResponse>>;
};
/**
 * BorrowsApi - factory interface
 * @export
 */
export declare const BorrowsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get user borrows of lendingpool
     * @summary Get user borrows of lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserBorrows(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<UserBorrowsResponse>;
};
/**
 * BorrowsApi - interface
 * @export
 * @interface BorrowsApi
 */
export interface BorrowsApiInterface {
    /**
     * Get user borrows of lendingpool
     * @summary Get user borrows of lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BorrowsApiInterface
     */
    getUserBorrows(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<UserBorrowsResponse>;
}
/**
 * BorrowsApi - object-oriented interface
 * @export
 * @class BorrowsApi
 * @extends {BaseAPI}
 */
export declare class BorrowsApi extends BaseAPI implements BorrowsApiInterface {
    /**
     * Get user borrows of lendingpool
     * @summary Get user borrows of lendingpool
     * @param {string} [user] Ethereum address of the user
     * @param {string} [reserve] Ethereum address of the reserve
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of deposits returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BorrowsApi
     */
    getUserBorrows(user?: string, reserve?: string, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<UserBorrowsResponse, any>>;
}
