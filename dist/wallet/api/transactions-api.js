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
exports.TransactionsApi = exports.TransactionsApiFactory = exports.TransactionsApiFp = exports.TransactionsApiAxiosParamCreator = void 0;
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
 * TransactionsApi - axios parameter creator
 * @export
 */
const TransactionsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get a list of the recent transactions of the user.
         * @summary Get user transactions
         * @param {number} [cursor] Cursor for pagination
         * @param {number} [limit] Limit the number of transactions returned (default is 100)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserTransactions: (cursor_1, limit_1, ...args_1) => tslib_1.__awaiter(this, [cursor_1, limit_1, ...args_1], void 0, function* (cursor, limit, options = {}) {
            const localVarPath = `/transactions`;
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
            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.TransactionsApiAxiosParamCreator = TransactionsApiAxiosParamCreator;
/**
 * TransactionsApi - functional programming interface
 * @export
 */
const TransactionsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.TransactionsApiAxiosParamCreator)(configuration);
    return {
        /**
         * Get a list of the recent transactions of the user.
         * @summary Get user transactions
         * @param {number} [cursor] Cursor for pagination
         * @param {number} [limit] Limit the number of transactions returned (default is 100)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserTransactions(cursor, limit, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getUserTransactions(cursor, limit, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['TransactionsApi.getUserTransactions']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
    };
};
exports.TransactionsApiFp = TransactionsApiFp;
/**
 * TransactionsApi - factory interface
 * @export
 */
const TransactionsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.TransactionsApiFp)(configuration);
    return {
        /**
         * Get a list of the recent transactions of the user.
         * @summary Get user transactions
         * @param {number} [cursor] Cursor for pagination
         * @param {number} [limit] Limit the number of transactions returned (default is 100)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserTransactions(cursor, limit, options) {
            return localVarFp.getUserTransactions(cursor, limit, options).then((request) => request(axios, basePath));
        },
    };
};
exports.TransactionsApiFactory = TransactionsApiFactory;
/**
 * TransactionsApi - object-oriented interface
 * @export
 * @class TransactionsApi
 * @extends {BaseAPI}
 */
class TransactionsApi extends base_1.BaseAPI {
    /**
     * Get a list of the recent transactions of the user.
     * @summary Get user transactions
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of transactions returned (default is 100)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TransactionsApi
     */
    getUserTransactions(cursor, limit, options) {
        return (0, exports.TransactionsApiFp)(this.configuration).getUserTransactions(cursor, limit, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.TransactionsApi = TransactionsApi;
//# sourceMappingURL=transactions-api.js.map