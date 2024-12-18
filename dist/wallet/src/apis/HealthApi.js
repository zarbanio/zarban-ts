"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthApi = void 0;
const tslib_1 = require("tslib");
const runtime = tslib_1.__importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class HealthApi extends runtime.BaseAPI {
    /**
     * Check the health of the API.
     * Health check
     */
    async checkApiHealthRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/healthz`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.HealthStatusFromJSON)(jsonValue));
    }
    /**
     * Check the health of the API.
     * Health check
     */
    async checkApiHealth(initOverrides) {
        const response = await this.checkApiHealthRaw(initOverrides);
        return await response.value();
    }
}
exports.HealthApi = HealthApi;
//# sourceMappingURL=HealthApi.js.map