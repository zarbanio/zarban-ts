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
import type { TransactionResponse } from '../model';
/**
 * TransactionsApi - axios parameter creator
 * @export
 */
export declare const TransactionsApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get a list of the recent transactions of the user.
     * @summary Get user transactions
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of transactions returned (default is 100)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserTransactions: (cursor?: number, limit?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * TransactionsApi - functional programming interface
 * @export
 */
export declare const TransactionsApiFp: (configuration?: Configuration) => {
    /**
     * Get a list of the recent transactions of the user.
     * @summary Get user transactions
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of transactions returned (default is 100)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserTransactions(cursor?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TransactionResponse>>;
};
/**
 * TransactionsApi - factory interface
 * @export
 */
export declare const TransactionsApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get a list of the recent transactions of the user.
     * @summary Get user transactions
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of transactions returned (default is 100)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserTransactions(cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<TransactionResponse>;
};
/**
 * TransactionsApi - interface
 * @export
 * @interface TransactionsApi
 */
export interface TransactionsApiInterface {
    /**
     * Get a list of the recent transactions of the user.
     * @summary Get user transactions
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of transactions returned (default is 100)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApiInterface
     */
    getUserTransactions(cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<TransactionResponse>;
}
/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
export declare class TransactionsApi extends BaseAPI implements TransactionsApiInterface {
    /**
     * Get a list of the recent transactions of the user.
     * @summary Get user transactions
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of transactions returned (default is 100)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getUserTransactions(cursor?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<TransactionResponse, any>>;
}
//# sourceMappingURL=transactions-api.d.ts.map