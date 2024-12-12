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
import type { SwapRequest } from '../model';
import type { SwapResponse } from '../model';
/**
 * SwapApi - axios parameter creator
 * @export
 */
export declare const SwapApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Swap coins in the wallet.
     * @summary Swap coins
     * @param {SwapRequest} swapRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    swapCoins: (swapRequest: SwapRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * SwapApi - functional programming interface
 * @export
 */
export declare const SwapApiFp: (configuration?: Configuration) => {
    /**
     * Swap coins in the wallet.
     * @summary Swap coins
     * @param {SwapRequest} swapRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    swapCoins(swapRequest: SwapRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<SwapResponse>>;
};
/**
 * SwapApi - factory interface
 * @export
 */
export declare const SwapApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Swap coins in the wallet.
     * @summary Swap coins
     * @param {SwapRequest} swapRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    swapCoins(swapRequest: SwapRequest, options?: RawAxiosRequestConfig): AxiosPromise<SwapResponse>;
};
/**
 * SwapApi - interface
 * @export
 * @interface SwapApi
 */
export interface SwapApiInterface {
    /**
     * Swap coins in the wallet.
     * @summary Swap coins
     * @param {SwapRequest} swapRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SwapApiInterface
     */
    swapCoins(swapRequest: SwapRequest, options?: RawAxiosRequestConfig): AxiosPromise<SwapResponse>;
}
/**
 * SwapApi - object-oriented interface
 * @export
 * @class SwapApi
 * @extends {BaseAPI}
 */
export declare class SwapApi extends BaseAPI implements SwapApiInterface {
    /**
     * Swap coins in the wallet.
     * @summary Swap coins
     * @param {SwapRequest} swapRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SwapApi
     */
    swapCoins(swapRequest: SwapRequest, options?: RawAxiosRequestConfig): Promise<import("axios").AxiosResponse<SwapResponse, any>>;
}
//# sourceMappingURL=swap-api.d.ts.map