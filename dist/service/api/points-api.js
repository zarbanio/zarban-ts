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
exports.PointsApi = exports.PointsApiFactory = exports.PointsApiFp = exports.PointsApiAxiosParamCreator = void 0;
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
 * PointsApi - axios parameter creator
 * @export
 */
const PointsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get scoreboard
         * @summary Get scoreboard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getScoreboard: (...args_1) => tslib_1.__awaiter(this, [...args_1], void 0, function* (options = {}) {
            const localVarPath = `/v2/points/scoreboard`;
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
exports.PointsApiAxiosParamCreator = PointsApiAxiosParamCreator;
/**
 * PointsApi - functional programming interface
 * @export
 */
const PointsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.PointsApiAxiosParamCreator)(configuration);
    return {
        /**
         * Get scoreboard
         * @summary Get scoreboard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getScoreboard(options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getScoreboard(options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['PointsApi.getScoreboard']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
    };
};
exports.PointsApiFp = PointsApiFp;
/**
 * PointsApi - factory interface
 * @export
 */
const PointsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.PointsApiFp)(configuration);
    return {
        /**
         * Get scoreboard
         * @summary Get scoreboard
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getScoreboard(options) {
            return localVarFp.getScoreboard(options).then((request) => request(axios, basePath));
        },
    };
};
exports.PointsApiFactory = PointsApiFactory;
/**
 * PointsApi - object-oriented interface
 * @export
 * @class PointsApi
 * @extends {BaseAPI}
 */
class PointsApi extends base_1.BaseAPI {
    /**
     * Get scoreboard
     * @summary Get scoreboard
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PointsApi
     */
    getScoreboard(options) {
        return (0, exports.PointsApiFp)(this.configuration).getScoreboard(options).then((request) => request(this.axios, this.basePath));
    }
}
exports.PointsApi = PointsApi;
//# sourceMappingURL=points-api.js.map