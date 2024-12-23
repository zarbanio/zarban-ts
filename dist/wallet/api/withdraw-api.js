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
exports.WithdrawApi = exports.WithdrawApiFactory = exports.WithdrawApiFp = exports.WithdrawApiAxiosParamCreator = void 0;
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
 * WithdrawApi - axios parameter creator
 * @export
 */
const WithdrawApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get user withdraw requests
         * @summary Get user withdraw requests
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserWithdrawRequests: (...args_1) => tslib_1.__awaiter(this, [...args_1], void 0, function* (options = {}) {
            const localVarPath = `/withdraws`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration);
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Get the status of a withdrawal request.
         * @summary Get withdrawal status
         * @param {number} id Withdrawal request ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWithdrawalStatus: (id_1, ...args_1) => tslib_1.__awaiter(this, [id_1, ...args_1], void 0, function* (id, options = {}) {
            // verify required parameter 'id' is not null or undefined
            (0, common_1.assertParamExists)('getWithdrawalStatus', 'id', id);
            const localVarPath = `/withdraws/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration);
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Request a withdrawal from the wallet.
         * @summary Withdraw request
         * @param {WithdrawRequestBody} withdrawRequestBody
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        previewWithdrawal: (withdrawRequestBody_1, ...args_1) => tslib_1.__awaiter(this, [withdrawRequestBody_1, ...args_1], void 0, function* (withdrawRequestBody, options = {}) {
            // verify required parameter 'withdrawRequestBody' is not null or undefined
            (0, common_1.assertParamExists)('previewWithdrawal', 'withdrawRequestBody', withdrawRequestBody);
            const localVarPath = `/withdraws/preview`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(withdrawRequestBody, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Request a withdrawal from the wallet.
         * @summary Withdraw request
         * @param {WithdrawRequestBody} withdrawRequestBody
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestWithdrawal: (withdrawRequestBody_1, ...args_1) => tslib_1.__awaiter(this, [withdrawRequestBody_1, ...args_1], void 0, function* (withdrawRequestBody, options = {}) {
            // verify required parameter 'withdrawRequestBody' is not null or undefined
            (0, common_1.assertParamExists)('requestWithdrawal', 'withdrawRequestBody', withdrawRequestBody);
            const localVarPath = `/withdraws/request`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            yield (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration);
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(withdrawRequestBody, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.WithdrawApiAxiosParamCreator = WithdrawApiAxiosParamCreator;
/**
 * WithdrawApi - functional programming interface
 * @export
 */
const WithdrawApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.WithdrawApiAxiosParamCreator)(configuration);
    return {
        /**
         * Get user withdraw requests
         * @summary Get user withdraw requests
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserWithdrawRequests(options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getUserWithdrawRequests(options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['WithdrawApi.getUserWithdrawRequests']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         * Get the status of a withdrawal request.
         * @summary Get withdrawal status
         * @param {number} id Withdrawal request ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWithdrawalStatus(id, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getWithdrawalStatus(id, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['WithdrawApi.getWithdrawalStatus']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         * Request a withdrawal from the wallet.
         * @summary Withdraw request
         * @param {WithdrawRequestBody} withdrawRequestBody
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        previewWithdrawal(withdrawRequestBody, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.previewWithdrawal(withdrawRequestBody, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['WithdrawApi.previewWithdrawal']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         * Request a withdrawal from the wallet.
         * @summary Withdraw request
         * @param {WithdrawRequestBody} withdrawRequestBody
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestWithdrawal(withdrawRequestBody, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.requestWithdrawal(withdrawRequestBody, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['WithdrawApi.requestWithdrawal']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
    };
};
exports.WithdrawApiFp = WithdrawApiFp;
/**
 * WithdrawApi - factory interface
 * @export
 */
const WithdrawApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.WithdrawApiFp)(configuration);
    return {
        /**
         * Get user withdraw requests
         * @summary Get user withdraw requests
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserWithdrawRequests(options) {
            return localVarFp.getUserWithdrawRequests(options).then((request) => request(axios, basePath));
        },
        /**
         * Get the status of a withdrawal request.
         * @summary Get withdrawal status
         * @param {number} id Withdrawal request ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getWithdrawalStatus(id, options) {
            return localVarFp.getWithdrawalStatus(id, options).then((request) => request(axios, basePath));
        },
        /**
         * Request a withdrawal from the wallet.
         * @summary Withdraw request
         * @param {WithdrawRequestBody} withdrawRequestBody
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        previewWithdrawal(withdrawRequestBody, options) {
            return localVarFp.previewWithdrawal(withdrawRequestBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Request a withdrawal from the wallet.
         * @summary Withdraw request
         * @param {WithdrawRequestBody} withdrawRequestBody
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        requestWithdrawal(withdrawRequestBody, options) {
            return localVarFp.requestWithdrawal(withdrawRequestBody, options).then((request) => request(axios, basePath));
        },
    };
};
exports.WithdrawApiFactory = WithdrawApiFactory;
/**
 * WithdrawApi - object-oriented interface
 * @export
 * @class WithdrawApi
 * @extends {BaseAPI}
 */
class WithdrawApi extends base_1.BaseAPI {
    /**
     * Get user withdraw requests
     * @summary Get user withdraw requests
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApi
     */
    getUserWithdrawRequests(options) {
        return (0, exports.WithdrawApiFp)(this.configuration).getUserWithdrawRequests(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the status of a withdrawal request.
     * @summary Get withdrawal status
     * @param {number} id Withdrawal request ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApi
     */
    getWithdrawalStatus(id, options) {
        return (0, exports.WithdrawApiFp)(this.configuration).getWithdrawalStatus(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApi
     */
    previewWithdrawal(withdrawRequestBody, options) {
        return (0, exports.WithdrawApiFp)(this.configuration).previewWithdrawal(withdrawRequestBody, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Request a withdrawal from the wallet.
     * @summary Withdraw request
     * @param {WithdrawRequestBody} withdrawRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WithdrawApi
     */
    requestWithdrawal(withdrawRequestBody, options) {
        return (0, exports.WithdrawApiFp)(this.configuration).requestWithdrawal(withdrawRequestBody, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.WithdrawApi = WithdrawApi;
//# sourceMappingURL=withdraw-api.js.map