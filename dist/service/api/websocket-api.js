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
exports.WebsocketApi = exports.WebsocketApiFactory = exports.WebsocketApiFp = exports.WebsocketApiAxiosParamCreator = void 0;
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
 * WebsocketApi - axios parameter creator
 * @export
 */
const WebsocketApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Upgrade to websocket connection
         * @summary Websocket Upgrade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUnfilledOrdersWebsocket: (...args_1) => tslib_1.__awaiter(this, [...args_1], void 0, function* (options = {}) {
            const localVarPath = `/v2/ws`;
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
exports.WebsocketApiAxiosParamCreator = WebsocketApiAxiosParamCreator;
/**
 * WebsocketApi - functional programming interface
 * @export
 */
const WebsocketApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.WebsocketApiAxiosParamCreator)(configuration);
    return {
        /**
         * Upgrade to websocket connection
         * @summary Websocket Upgrade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUnfilledOrdersWebsocket(options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getUnfilledOrdersWebsocket(options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['WebsocketApi.getUnfilledOrdersWebsocket']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
    };
};
exports.WebsocketApiFp = WebsocketApiFp;
/**
 * WebsocketApi - factory interface
 * @export
 */
const WebsocketApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.WebsocketApiFp)(configuration);
    return {
        /**
         * Upgrade to websocket connection
         * @summary Websocket Upgrade
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUnfilledOrdersWebsocket(options) {
            return localVarFp.getUnfilledOrdersWebsocket(options).then((request) => request(axios, basePath));
        },
    };
};
exports.WebsocketApiFactory = WebsocketApiFactory;
/**
 * WebsocketApi - object-oriented interface
 * @export
 * @class WebsocketApi
 * @extends {BaseAPI}
 */
class WebsocketApi extends base_1.BaseAPI {
    /**
     * Upgrade to websocket connection
     * @summary Websocket Upgrade
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WebsocketApi
     */
    getUnfilledOrdersWebsocket(options) {
        return (0, exports.WebsocketApiFp)(this.configuration).getUnfilledOrdersWebsocket(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.WebsocketApi = WebsocketApi;
//# sourceMappingURL=websocket-api.js.map