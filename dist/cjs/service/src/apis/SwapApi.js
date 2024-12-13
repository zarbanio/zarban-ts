"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapApi = void 0;
const tslib_1 = require("tslib");
const runtime = tslib_1.__importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class SwapApi extends runtime.BaseAPI {
    /**
     * Get a quote for a swap
     * Get a quote for a swap
     */
    async getSwapQuoteRaw(requestParameters, initOverrides) {
        if (requestParameters['quoteRequest'] == null) {
            throw new runtime.RequiredError('quoteRequest', 'Required parameter "quoteRequest" was null or undefined when calling getSwapQuote().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/v2/swap/quote`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.QuoteRequestToJSON)(requestParameters['quoteRequest']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.QuoteResponseFromJSON)(jsonValue));
    }
    /**
     * Get a quote for a swap
     * Get a quote for a swap
     */
    async getSwapQuote(requestParameters, initOverrides) {
        const response = await this.getSwapQuoteRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.SwapApi = SwapApi;
//# sourceMappingURL=SwapApi.js.map