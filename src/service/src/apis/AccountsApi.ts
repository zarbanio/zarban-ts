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


import * as runtime from '../runtime';
import type {
  Account,
} from '../models/index';
import {
    AccountFromJSON,
    AccountToJSON,
} from '../models/index';

export interface GetAccountByAddressRequest {
    address: string;
}

/**
 * AccountsApi - interface
 * 
 * @export
 * @interface AccountsApiInterface
 */
export interface AccountsApiInterface {
    /**
     * Get account by address
     * @summary Get account by address
     * @param {string} address Ethereum address of the account
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AccountsApiInterface
     */
    getAccountByAddressRaw(requestParameters: GetAccountByAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>>;

    /**
     * Get account by address
     * Get account by address
     */
    getAccountByAddress(requestParameters: GetAccountByAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account>;

}

/**
 * 
 */
export class AccountsApi extends runtime.BaseAPI implements AccountsApiInterface {

    /**
     * Get account by address
     * Get account by address
     */
    async getAccountByAddressRaw(requestParameters: GetAccountByAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Account>> {
        if (requestParameters['address'] == null) {
            throw new runtime.RequiredError(
                'address',
                'Required parameter "address" was null or undefined when calling getAccountByAddress().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/v2/accounts/{address}`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters['address']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountFromJSON(jsonValue));
    }

    /**
     * Get account by address
     * Get account by address
     */
    async getAccountByAddress(requestParameters: GetAccountByAddressRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Account> {
        const response = await this.getAccountByAddressRaw(requestParameters, initOverrides);
        return await response.value();
    }

}