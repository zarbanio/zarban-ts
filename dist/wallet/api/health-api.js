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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthApi = exports.HealthApiFactory = exports.HealthApiFp = exports.HealthApiAxiosParamCreator = void 0;
const axios_1 = __importDefault(require("axios"));
// URLSearchParams not necessarily used
// @ts-ignore
const url_1 = require("url");
// Some imports not used depending on template conditions
// @ts-ignore
const common_1 = require("../common");
// @ts-ignore
const base_1 = require("../base");
/**
 * HealthApi - axios parameter creator
 * @export
 */
const HealthApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Check the health of the API.
         * @summary Health check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkApiHealth: async (options = {}) => {
            const localVarPath = `/healthz`;
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
        },
    };
};
exports.HealthApiAxiosParamCreator = HealthApiAxiosParamCreator;
/**
 * HealthApi - functional programming interface
 * @export
 */
const HealthApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.HealthApiAxiosParamCreator)(configuration);
    return {
        /**
         * Check the health of the API.
         * @summary Health check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkApiHealth(options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkApiHealth(options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['HealthApi.checkApiHealth']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
exports.HealthApiFp = HealthApiFp;
/**
 * HealthApi - factory interface
 * @export
 */
const HealthApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.HealthApiFp)(configuration);
    return {
        /**
         * Check the health of the API.
         * @summary Health check
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkApiHealth(options) {
            return localVarFp.checkApiHealth(options).then((request) => request(axios, basePath));
        },
    };
};
exports.HealthApiFactory = HealthApiFactory;
/**
 * HealthApi - object-oriented interface
 * @export
 * @class HealthApi
 * @extends {BaseAPI}
 */
class HealthApi extends base_1.BaseAPI {
    /**
     * Check the health of the API.
     * @summary Health check
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof HealthApi
     */
    checkApiHealth(options) {
        return (0, exports.HealthApiFp)(this.configuration).checkApiHealth(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.HealthApi = HealthApi;
