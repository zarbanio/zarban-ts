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


import * as runtime from '../runtime';
import type {
  Balance,
  Symbol,
  WalletBalance,
} from '../models/index';
import {
    BalanceFromJSON,
    BalanceToJSON,
    SymbolFromJSON,
    SymbolToJSON,
    WalletBalanceFromJSON,
    WalletBalanceToJSON,
} from '../models/index';

export interface GetBalanceBySymbolRequest {
    symbol: Symbol;
}

/**
 * BalanceApi - interface
 * 
 * @export
 * @interface BalanceApiInterface
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
    getBalanceBySymbolRaw(requestParameters: GetBalanceBySymbolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Balance>>;

    /**
     * Get the balance by a symbol.
     * Get balance
     */
    getBalanceBySymbol(requestParameters: GetBalanceBySymbolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Balance>;

    /**
     * Get the balance of the wallet.
     * @summary Get wallet balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BalanceApiInterface
     */
    getWalletBalanceRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WalletBalance>>;

    /**
     * Get the balance of the wallet.
     * Get wallet balance
     */
    getWalletBalance(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WalletBalance>;

}

/**
 * 
 */
export class BalanceApi extends runtime.BaseAPI implements BalanceApiInterface {

    /**
     * Get the balance by a symbol.
     * Get balance
     */
    async getBalanceBySymbolRaw(requestParameters: GetBalanceBySymbolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Balance>> {
        if (requestParameters['symbol'] == null) {
            throw new runtime.RequiredError(
                'symbol',
                'Required parameter "symbol" was null or undefined when calling getBalanceBySymbol().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/balance/{symbol}`.replace(`{${"symbol"}}`, encodeURIComponent(String(requestParameters['symbol']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BalanceFromJSON(jsonValue));
    }

    /**
     * Get the balance by a symbol.
     * Get balance
     */
    async getBalanceBySymbol(requestParameters: GetBalanceBySymbolRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Balance> {
        const response = await this.getBalanceBySymbolRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get the balance of the wallet.
     * Get wallet balance
     */
    async getWalletBalanceRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<WalletBalance>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/balance`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => WalletBalanceFromJSON(jsonValue));
    }

    /**
     * Get the balance of the wallet.
     * Get wallet balance
     */
    async getWalletBalance(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<WalletBalance> {
        const response = await this.getWalletBalanceRaw(initOverrides);
        return await response.value();
    }

}
