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
exports.CollectorApi = void 0;
const tslib_1 = require("tslib");
const runtime = tslib_1.__importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class CollectorApi extends runtime.BaseAPI {
    /**
     * Get collector data
     * Get collector data
     */
    async getCollectorDataRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/v2/stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StatsFromJSON)(jsonValue));
    }
    /**
     * Get collector data
     * Get collector data
     */
    async getCollectorData(initOverrides) {
        const response = await this.getCollectorDataRaw(initOverrides);
        return await response.value();
    }
}
exports.CollectorApi = CollectorApi;
//# sourceMappingURL=CollectorApi.js.map