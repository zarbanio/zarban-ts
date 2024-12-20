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
import { __awaiter } from "tslib";
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, setSearchParams, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, BaseAPI, operationServerMap } from '../base';
/**
 * PricesApi - axios parameter creator
 * @export
 */
export const PricesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Retrieve a list of price details based on specified query parameters
         * @summary List prices based on query parameters
         * @param {string} [symbol] Symbol of the price
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPrices: (symbol_1, ...args_1) => __awaiter(this, [symbol_1, ...args_1], void 0, function* (symbol, options = {}) {
            const localVarPath = `/v2/prices`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (symbol !== undefined) {
                localVarQueryParameter['symbol'] = symbol;
            }
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
    };
};
/**
 * PricesApi - functional programming interface
 * @export
 */
export const PricesApiFp = function (configuration) {
    const localVarAxiosParamCreator = PricesApiAxiosParamCreator(configuration);
    return {
        /**
         * Retrieve a list of price details based on specified query parameters
         * @summary List prices based on query parameters
         * @param {string} [symbol] Symbol of the price
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPrices(symbol, options) {
            return __awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.listPrices(symbol, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = operationServerMap['PricesApi.listPrices']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
    };
};
/**
 * PricesApi - factory interface
 * @export
 */
export const PricesApiFactory = function (configuration, basePath, axios) {
    const localVarFp = PricesApiFp(configuration);
    return {
        /**
         * Retrieve a list of price details based on specified query parameters
         * @summary List prices based on query parameters
         * @param {string} [symbol] Symbol of the price
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listPrices(symbol, options) {
            return localVarFp.listPrices(symbol, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * PricesApi - object-oriented interface
 * @export
 * @class PricesApi
 * @extends {BaseAPI}
 */
export class PricesApi extends BaseAPI {
    /**
     * Retrieve a list of price details based on specified query parameters
     * @summary List prices based on query parameters
     * @param {string} [symbol] Symbol of the price
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PricesApi
     */
    listPrices(symbol, options) {
        return PricesApiFp(this.configuration).listPrices(symbol, options).then((request) => request(this.axios, this.basePath));
    }
}
//# sourceMappingURL=prices-api.js.map