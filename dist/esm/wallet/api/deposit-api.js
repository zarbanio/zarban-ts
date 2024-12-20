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
import { __awaiter } from "tslib";
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setBearerAuthToObject, setSearchParams, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, BaseAPI, operationServerMap } from '../base';
/**
 * DepositApi - axios parameter creator
 * @export
 */
export const DepositApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Deposit money to the wallet.
         * @summary Deposit money
         * @param {string} network Network to deposit
         * @param {string} symbol Coin symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        depositMoney: (network_1, symbol_1, ...args_1) => __awaiter(this, [network_1, symbol_1, ...args_1], void 0, function* (network, symbol, options = {}) {
            // verify required parameter 'network' is not null or undefined
            assertParamExists('depositMoney', 'network', network);
            // verify required parameter 'symbol' is not null or undefined
            assertParamExists('depositMoney', 'symbol', symbol);
            const localVarPath = `/deposit`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            yield setBearerAuthToObject(localVarHeaderParameter, configuration);
            if (network !== undefined) {
                localVarQueryParameter['network'] = network;
            }
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
 * DepositApi - functional programming interface
 * @export
 */
export const DepositApiFp = function (configuration) {
    const localVarAxiosParamCreator = DepositApiAxiosParamCreator(configuration);
    return {
        /**
         * Deposit money to the wallet.
         * @summary Deposit money
         * @param {string} network Network to deposit
         * @param {string} symbol Coin symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        depositMoney(network, symbol, options) {
            return __awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.depositMoney(network, symbol, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = operationServerMap['DepositApi.depositMoney']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
    };
};
/**
 * DepositApi - factory interface
 * @export
 */
export const DepositApiFactory = function (configuration, basePath, axios) {
    const localVarFp = DepositApiFp(configuration);
    return {
        /**
         * Deposit money to the wallet.
         * @summary Deposit money
         * @param {string} network Network to deposit
         * @param {string} symbol Coin symbol
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        depositMoney(network, symbol, options) {
            return localVarFp.depositMoney(network, symbol, options).then((request) => request(axios, basePath));
        },
    };
};
/**
 * DepositApi - object-oriented interface
 * @export
 * @class DepositApi
 * @extends {BaseAPI}
 */
export class DepositApi extends BaseAPI {
    /**
     * Deposit money to the wallet.
     * @summary Deposit money
     * @param {string} network Network to deposit
     * @param {string} symbol Coin symbol
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DepositApi
     */
    depositMoney(network, symbol, options) {
        return DepositApiFp(this.configuration).depositMoney(network, symbol, options).then((request) => request(this.axios, this.basePath));
    }
}
//# sourceMappingURL=deposit-api.js.map