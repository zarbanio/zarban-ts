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
import type { WithdrawRequest } from '../model';
import type { WithdrawRequestBody } from '../model';
import type { WithdrawRequestPreview } from '../model';
import type { WithdrawRequestResponse } from '../model';
import type { WithdrawResponseBody } from '../model';
/**
 * WithdrawApi - axios parameter creator
 * @export
 */
export declare const WithdrawApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Get user withdraw requests
     * @summary Get user withdraw requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserWithdrawRequests: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get the status of a withdrawal request.
     * @summary Get withdrawal status
     * @param {number} id Withdrawal request ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWithdrawalStatus: (id: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    previewWithdrawal: (withdrawRequestBody: WithdrawRequestBody, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    requestWithdrawal: (withdrawRequestBody: WithdrawRequestBody, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * WithdrawApi - functional programming interface
 * @export
 */
export declare const WithdrawApiFp: (configuration?: Configuration) => {
    /**
     * Get user withdraw requests
     * @summary Get user withdraw requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserWithdrawRequests(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WithdrawRequestResponse>>;
    /**
     * Get the status of a withdrawal request.
     * @summary Get withdrawal status
     * @param {number} id Withdrawal request ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWithdrawalStatus(id: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WithdrawRequest>>;
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    previewWithdrawal(withdrawRequestBody: WithdrawRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WithdrawRequestPreview>>;
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    requestWithdrawal(withdrawRequestBody: WithdrawRequestBody, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WithdrawResponseBody>>;
};
/**
 * WithdrawApi - factory interface
 * @export
 */
export declare const WithdrawApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Get user withdraw requests
     * @summary Get user withdraw requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getUserWithdrawRequests(options?: RawAxiosRequestConfig): AxiosPromise<WithdrawRequestResponse>;
    /**
     * Get the status of a withdrawal request.
     * @summary Get withdrawal status
     * @param {number} id Withdrawal request ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getWithdrawalStatus(id: number, options?: RawAxiosRequestConfig): AxiosPromise<WithdrawRequest>;
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    previewWithdrawal(withdrawRequestBody: WithdrawRequestBody, options?: RawAxiosRequestConfig): AxiosPromise<WithdrawRequestPreview>;
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    requestWithdrawal(withdrawRequestBody: WithdrawRequestBody, options?: RawAxiosRequestConfig): AxiosPromise<WithdrawResponseBody>;
};
/**
 * WithdrawApi - interface
 * @export
 * @interface WithdrawApi
 */
export interface WithdrawApiInterface {
    /**
     * Get user withdraw requests
     * @summary Get user withdraw requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApiInterface
     */
    getUserWithdrawRequests(options?: RawAxiosRequestConfig): AxiosPromise<WithdrawRequestResponse>;
    /**
     * Get the status of a withdrawal request.
     * @summary Get withdrawal status
     * @param {number} id Withdrawal request ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApiInterface
     */
    getWithdrawalStatus(id: number, options?: RawAxiosRequestConfig): AxiosPromise<WithdrawRequest>;
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApiInterface
     */
    previewWithdrawal(withdrawRequestBody: WithdrawRequestBody, options?: RawAxiosRequestConfig): AxiosPromise<WithdrawRequestPreview>;
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApiInterface
     */
    requestWithdrawal(withdrawRequestBody: WithdrawRequestBody, options?: RawAxiosRequestConfig): AxiosPromise<WithdrawResponseBody>;
}
/**
 * WithdrawApi - object-oriented interface
 * @export
 * @class WithdrawApi
 * @extends {BaseAPI}
 */
export declare class WithdrawApi extends BaseAPI implements WithdrawApiInterface {
    /**
     * Get user withdraw requests
     * @summary Get user withdraw requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApi
     */
    getUserWithdrawRequests(options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<WithdrawRequestResponse, any>>;
    /**
     * Get the status of a withdrawal request.
     * @summary Get withdrawal status
     * @param {number} id Withdrawal request ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApi
     */
    getWithdrawalStatus(id: number, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<WithdrawRequest, any>>;
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApi
     */
    previewWithdrawal(withdrawRequestBody: WithdrawRequestBody, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<WithdrawRequestPreview, any>>;
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApi
     */
    requestWithdrawal(withdrawRequestBody: WithdrawRequestBody, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<WithdrawResponseBody, any>>;
}
//# sourceMappingURL=withdraw-api.d.ts.map