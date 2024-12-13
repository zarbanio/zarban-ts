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
exports.LogsApi = void 0;
const tslib_1 = require("tslib");
const runtime = tslib_1.__importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class LogsApi extends runtime.BaseAPI {
    /**
     * Get raw and decoded logs by transaction hash
     * Get raw and decoded logs by transaction hash
     */
    async getLogsByTransactionHashRaw(requestParameters, initOverrides) {
        if (requestParameters['txHash'] == null) {
            throw new runtime.RequiredError('txHash', 'Required parameter "txHash" was null or undefined when calling getLogsByTransactionHash().');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/v2/logs/{txHash}`.replace(`{${"txHash"}}`, encodeURIComponent(String(requestParameters['txHash']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.EventDetailsResponseFromJSON)(jsonValue));
    }
    /**
     * Get raw and decoded logs by transaction hash
     * Get raw and decoded logs by transaction hash
     */
    async getLogsByTransactionHash(requestParameters, initOverrides) {
        const response = await this.getLogsByTransactionHashRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.LogsApi = LogsApi;
//# sourceMappingURL=LogsApi.js.map