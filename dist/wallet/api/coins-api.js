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
exports.CoinsApi = exports.CoinsApiFactory = exports.CoinsApiFp = exports.CoinsApiAxiosParamCreator = void 0;
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
 * CoinsApi - axios parameter creator
 * @export
 */
const CoinsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get the details of a coin.
         * @summary Get coin
         * @param {Symbol} symbol Coin symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCoinDetails: (symbol_1, ...args_1) => tslib_1.__awaiter(this, [symbol_1, ...args_1], void 0, function* (symbol, options = {}) {
            // verify required parameter 'symbol' is not null or undefined
            (0, common_1.assertParamExists)('getCoinDetails', 'symbol', symbol);
            const localVarPath = `/coins/{symbol}`
                .replace(`{${"symbol"}}`, encodeURIComponent(String(symbol)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         * Get the list of supported coins.
         * @summary Get coins
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupportedCoins: (...args_1) => tslib_1.__awaiter(this, [...args_1], void 0, function* (options = {}) {
            const localVarPath = `/coins`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
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
exports.CoinsApiAxiosParamCreator = CoinsApiAxiosParamCreator;
/**
 * CoinsApi - functional programming interface
 * @export
 */
const CoinsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.CoinsApiAxiosParamCreator)(configuration);
    return {
        /**
         * Get the details of a coin.
         * @summary Get coin
         * @param {Symbol} symbol Coin symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCoinDetails(symbol, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getCoinDetails(symbol, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['CoinsApi.getCoinDetails']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         * Get the list of supported coins.
         * @summary Get coins
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupportedCoins(options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getSupportedCoins(options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['CoinsApi.getSupportedCoins']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
    };
};
exports.CoinsApiFp = CoinsApiFp;
/**
 * CoinsApi - factory interface
 * @export
 */
const CoinsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.CoinsApiFp)(configuration);
    return {
        /**
         * Get the details of a coin.
         * @summary Get coin
         * @param {Symbol} symbol Coin symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getCoinDetails(symbol, options) {
            return localVarFp.getCoinDetails(symbol, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the list of supported coins.
         * @summary Get coins
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSupportedCoins(options) {
            return localVarFp.getSupportedCoins(options).then((request) => request(axios, basePath));
        },
    };
};
exports.CoinsApiFactory = CoinsApiFactory;
/**
 * CoinsApi - object-oriented interface
 * @export
 * @class CoinsApi
 * @extends {BaseAPI}
 */
class CoinsApi extends base_1.BaseAPI {
    /**
     * Get the details of a coin.
     * @summary Get coin
     * @param {Symbol} symbol Coin symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoinsApi
     */
    getCoinDetails(symbol, options) {
        return (0, exports.CoinsApiFp)(this.configuration).getCoinDetails(symbol, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the list of supported coins.
     * @summary Get coins
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CoinsApi
     */
    getSupportedCoins(options) {
        return (0, exports.CoinsApiFp)(this.configuration).getSupportedCoins(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.CoinsApi = CoinsApi;
//# sourceMappingURL=coins-api.js.map