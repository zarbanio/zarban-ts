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
exports.IlksApi = void 0;
const tslib_1 = require("tslib");
const runtime = tslib_1.__importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class IlksApi extends runtime.BaseAPI {
    /**
     * Retrieve a list of all available ilks.
     * Get all Ilks
     */
    async getAllIlksRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/v2/ilks`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.IlksResponseFromJSON)(jsonValue));
    }
    /**
     * Retrieve a list of all available ilks.
     * Get all Ilks
     */
    async getAllIlks(initOverrides) {
        const response = await this.getAllIlksRaw(initOverrides);
        return await response.value();
    }
    /**
     * Retrieve an Ilk by providing its name.
     * Get Ilk by name
     */
    async getIlkByNameRaw(requestParameters, initOverrides) {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError('name', 'Required parameter "name" was null or undefined when calling getIlkByName().');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/v2/ilks/{name}`.replace(`{${"name"}}`, encodeURIComponent(String(requestParameters['name']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.IlkFromJSON)(jsonValue));
    }
    /**
     * Retrieve an Ilk by providing its name.
     * Get Ilk by name
     */
    async getIlkByName(requestParameters, initOverrides) {
        const response = await this.getIlkByNameRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.IlksApi = IlksApi;
//# sourceMappingURL=IlksApi.js.map