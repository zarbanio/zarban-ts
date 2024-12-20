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
exports.SwapApi = exports.SwapApiFactory = exports.SwapApiFp = exports.SwapApiAxiosParamCreator = void 0;
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
 * SwapApi - axios parameter creator
 * @export
 */
const SwapApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Swap coins in the wallet.
         * @summary Swap coins
         * @param {SwapRequest} swapRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        swapCoins: (swapRequest_1, ...args_1) => tslib_1.__awaiter(this, [swapRequest_1, ...args_1], void 0, function* (swapRequest, options = {}) {
            // verify required parameter 'swapRequest' is not null or undefined
            (0, common_1.assertParamExists)('swapCoins', 'swapRequest', swapRequest);
            const localVarPath = `/swap`;
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
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(swapRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
exports.SwapApiAxiosParamCreator = SwapApiAxiosParamCreator;
/**
 * SwapApi - functional programming interface
 * @export
 */
const SwapApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.SwapApiAxiosParamCreator)(configuration);
    return {
        /**
         * Swap coins in the wallet.
         * @summary Swap coins
         * @param {SwapRequest} swapRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        swapCoins(swapRequest, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.swapCoins(swapRequest, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['SwapApi.swapCoins']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
    };
};
exports.SwapApiFp = SwapApiFp;
/**
 * SwapApi - factory interface
 * @export
 */
const SwapApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.SwapApiFp)(configuration);
    return {
        /**
         * Swap coins in the wallet.
         * @summary Swap coins
         * @param {SwapRequest} swapRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        swapCoins(swapRequest, options) {
            return localVarFp.swapCoins(swapRequest, options).then((request) => request(axios, basePath));
        },
    };
};
exports.SwapApiFactory = SwapApiFactory;
/**
 * SwapApi - object-oriented interface
 * @export
 * @class SwapApi
 * @extends {BaseAPI}
 */
class SwapApi extends base_1.BaseAPI {
    /**
     * Swap coins in the wallet.
     * @summary Swap coins
     * @param {SwapRequest} swapRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SwapApi
     */
    swapCoins(swapRequest, options) {
        return (0, exports.SwapApiFp)(this.configuration).swapCoins(swapRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.SwapApi = SwapApi;
//# sourceMappingURL=swap-api.js.map