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
exports.SwapApi = void 0;
const tslib_1 = require("tslib");
const runtime = tslib_1.__importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class SwapApi extends runtime.BaseAPI {
    /**
     * Swap coins in the wallet.
     * Swap coins
     */
    async swapCoinsRaw(requestParameters, initOverrides) {
        if (requestParameters['swapRequest'] == null) {
            throw new runtime.RequiredError('swapRequest', 'Required parameter "swapRequest" was null or undefined when calling swapCoins().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);
            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/swap`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.SwapRequestToJSON)(requestParameters['swapRequest']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.SwapResponseFromJSON)(jsonValue));
    }
    /**
     * Swap coins in the wallet.
     * Swap coins
     */
    async swapCoins(requestParameters, initOverrides) {
        const response = await this.swapCoinsRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.SwapApi = SwapApi;
//# sourceMappingURL=SwapApi.js.map