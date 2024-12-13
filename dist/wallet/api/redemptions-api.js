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
exports.GetAllRedemptionsStateEnum = exports.RedemptionsApi = exports.RedemptionsApiFactory = exports.RedemptionsApiFp = exports.RedemptionsApiAxiosParamCreator = void 0;
const tslib_1 = require("tslib");
const axios_1 = tslib_1.__importDefault(require("axios"));
// URLSearchParams not necessarily used
// @ts-ignore
const url_1 = require("url");
// Some imports not used depending on template conditions
// @ts-ignore
const common_1 = require("../common");
// @ts-ignore
const base_1 = require("../base");
/**
 * RedemptionsApi - axios parameter creator
 * @export
 */
const RedemptionsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get a list of all redemptions.
         * @summary Get all redemptions
         * @param {GetAllRedemptionsStateEnum} [state] Cursor for pagination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllRedemptions: async (state, options = {}) => {
            const localVarPath = `/admin/redemptions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            await (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration);
            if (state !== undefined) {
                localVarQueryParameter['state'] = state;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get the details of a redemption.
         * @summary Get redemption
         * @param {number} id Redemption ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRedemptionDetails: async (id, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            (0, common_1.assertParamExists)('getRedemptionDetails', 'id', id);
            const localVarPath = `/admin/redemptions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            await (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration);
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Redeem zar
         * @summary Redeem zar
         * @param {RedemptionRequest} redemptionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        redeemZar: async (redemptionRequest, options = {}) => {
            // verify required parameter 'redemptionRequest' is not null or undefined
            (0, common_1.assertParamExists)('redeemZar', 'redemptionRequest', redemptionRequest);
            const localVarPath = `/redemptions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            await (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(redemptionRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Update the status of a redemption.
         * @summary Update redemption
         * @param {string} id Redemption ID
         * @param {AdminRedemptionUpdateRequest} adminRedemptionUpdateRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRedemptionStatus: async (id, adminRedemptionUpdateRequest, options = {}) => {
            // verify required parameter 'id' is not null or undefined
            (0, common_1.assertParamExists)('updateRedemptionStatus', 'id', id);
            // verify required parameter 'adminRedemptionUpdateRequest' is not null or undefined
            (0, common_1.assertParamExists)('updateRedemptionStatus', 'adminRedemptionUpdateRequest', adminRedemptionUpdateRequest);
            const localVarPath = `/admin/redemptions/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            await (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(adminRedemptionUpdateRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.RedemptionsApiAxiosParamCreator = RedemptionsApiAxiosParamCreator;
/**
 * RedemptionsApi - functional programming interface
 * @export
 */
const RedemptionsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.RedemptionsApiAxiosParamCreator)(configuration);
    return {
        /**
         * Get a list of all redemptions.
         * @summary Get all redemptions
         * @param {GetAllRedemptionsStateEnum} [state] Cursor for pagination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getAllRedemptions(state, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getAllRedemptions(state, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = base_1.operationServerMap['RedemptionsApi.getAllRedemptions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get the details of a redemption.
         * @summary Get redemption
         * @param {number} id Redemption ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRedemptionDetails(id, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRedemptionDetails(id, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = base_1.operationServerMap['RedemptionsApi.getRedemptionDetails']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Redeem zar
         * @summary Redeem zar
         * @param {RedemptionRequest} redemptionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async redeemZar(redemptionRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.redeemZar(redemptionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = base_1.operationServerMap['RedemptionsApi.redeemZar']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Update the status of a redemption.
         * @summary Update redemption
         * @param {string} id Redemption ID
         * @param {AdminRedemptionUpdateRequest} adminRedemptionUpdateRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRedemptionStatus(id, adminRedemptionUpdateRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRedemptionStatus(id, adminRedemptionUpdateRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = base_1.operationServerMap['RedemptionsApi.updateRedemptionStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
exports.RedemptionsApiFp = RedemptionsApiFp;
/**
 * RedemptionsApi - factory interface
 * @export
 */
const RedemptionsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.RedemptionsApiFp)(configuration);
    return {
        /**
         * Get a list of all redemptions.
         * @summary Get all redemptions
         * @param {GetAllRedemptionsStateEnum} [state] Cursor for pagination
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllRedemptions(state, options) {
            return localVarFp.getAllRedemptions(state, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the details of a redemption.
         * @summary Get redemption
         * @param {number} id Redemption ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRedemptionDetails(id, options) {
            return localVarFp.getRedemptionDetails(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Redeem zar
         * @summary Redeem zar
         * @param {RedemptionRequest} redemptionRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        redeemZar(redemptionRequest, options) {
            return localVarFp.redeemZar(redemptionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Update the status of a redemption.
         * @summary Update redemption
         * @param {string} id Redemption ID
         * @param {AdminRedemptionUpdateRequest} adminRedemptionUpdateRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRedemptionStatus(id, adminRedemptionUpdateRequest, options) {
            return localVarFp.updateRedemptionStatus(id, adminRedemptionUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};
exports.RedemptionsApiFactory = RedemptionsApiFactory;
/**
 * RedemptionsApi - object-oriented interface
 * @export
 * @class RedemptionsApi
 * @extends {BaseAPI}
 */
class RedemptionsApi extends base_1.BaseAPI {
    /**
     * Get a list of all redemptions.
     * @summary Get all redemptions
     * @param {GetAllRedemptionsStateEnum} [state] Cursor for pagination
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApi
     */
    getAllRedemptions(state, options) {
        return (0, exports.RedemptionsApiFp)(this.configuration).getAllRedemptions(state, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the details of a redemption.
     * @summary Get redemption
     * @param {number} id Redemption ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApi
     */
    getRedemptionDetails(id, options) {
        return (0, exports.RedemptionsApiFp)(this.configuration).getRedemptionDetails(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Redeem zar
     * @summary Redeem zar
     * @param {RedemptionRequest} redemptionRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApi
     */
    redeemZar(redemptionRequest, options) {
        return (0, exports.RedemptionsApiFp)(this.configuration).redeemZar(redemptionRequest, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Update the status of a redemption.
     * @summary Update redemption
     * @param {string} id Redemption ID
     * @param {AdminRedemptionUpdateRequest} adminRedemptionUpdateRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RedemptionsApi
     */
    updateRedemptionStatus(id, adminRedemptionUpdateRequest, options) {
        return (0, exports.RedemptionsApiFp)(this.configuration).updateRedemptionStatus(id, adminRedemptionUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.RedemptionsApi = RedemptionsApi;
/**
 * @export
 */
exports.GetAllRedemptionsStateEnum = {
    PENDING: 'pending',
    APPROVED: 'approved',
    COMPLETED: 'completed',
    REJECTED: 'rejected'
};
//# sourceMappingURL=redemptions-api.js.map