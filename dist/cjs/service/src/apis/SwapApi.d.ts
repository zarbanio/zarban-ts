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
import type { QuoteRequest, QuoteResponse } from '../models/index';
export interface GetSwapQuoteRequest {
    quoteRequest: QuoteRequest;
}
/**
 * SwapApi - interface
 *
 * @export
 * @interface SwapApiInterface
 */
export interface SwapApiInterface {
    /**
     * Get a quote for a swap
     * @summary Get a quote for a swap
     * @param {QuoteRequest} quoteRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SwapApiInterface
     */
    getSwapQuoteRaw(requestParameters: GetSwapQuoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteResponse>>;
    /**
     * Get a quote for a swap
     * Get a quote for a swap
     */
    getSwapQuote(requestParameters: GetSwapQuoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteResponse>;
}
/**
 *
 */
export declare class SwapApi extends runtime.BaseAPI implements SwapApiInterface {
    /**
     * Get a quote for a swap
     * Get a quote for a swap
     */
    getSwapQuoteRaw(requestParameters: GetSwapQuoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<QuoteResponse>>;
    /**
     * Get a quote for a swap
     * Get a quote for a swap
     */
    getSwapQuote(requestParameters: GetSwapQuoteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<QuoteResponse>;
}
//# sourceMappingURL=SwapApi.d.ts.map