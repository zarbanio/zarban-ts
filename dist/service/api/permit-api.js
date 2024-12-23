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
exports.PermitApi = exports.PermitApiFactory = exports.PermitApiFp = exports.PermitApiAxiosParamCreator = void 0;
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
 * PermitApi - axios parameter creator
 * @export
 */
const PermitApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Get permit for single token
         * @summary Get permit for single token
         * @param {string} token Ethereum address of the token
         * @param {string} user Ethereum address of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleTokenPermit: (token_1, user_1, ...args_1) => tslib_1.__awaiter(this, [token_1, user_1, ...args_1], void 0, function* (token, user, options = {}) {
            // verify required parameter 'token' is not null or undefined
            (0, common_1.assertParamExists)('getSingleTokenPermit', 'token', token);
            // verify required parameter 'user' is not null or undefined
            (0, common_1.assertParamExists)('getSingleTokenPermit', 'user', user);
            const localVarPath = `/v2/permit/single`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }
            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
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
exports.PermitApiAxiosParamCreator = PermitApiAxiosParamCreator;
/**
 * PermitApi - functional programming interface
 * @export
 */
const PermitApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.PermitApiAxiosParamCreator)(configuration);
    return {
        /**
         * Get permit for single token
         * @summary Get permit for single token
         * @param {string} token Ethereum address of the token
         * @param {string} user Ethereum address of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleTokenPermit(token, user, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getSingleTokenPermit(token, user, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['PermitApi.getSingleTokenPermit']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
    };
};
exports.PermitApiFp = PermitApiFp;
/**
 * PermitApi - factory interface
 * @export
 */
const PermitApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.PermitApiFp)(configuration);
    return {
        /**
         * Get permit for single token
         * @summary Get permit for single token
         * @param {string} token Ethereum address of the token
         * @param {string} user Ethereum address of the user
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getSingleTokenPermit(token, user, options) {
            return localVarFp.getSingleTokenPermit(token, user, options).then((request) => request(axios, basePath));
        },
    };
};
exports.PermitApiFactory = PermitApiFactory;
/**
 * PermitApi - object-oriented interface
 * @export
 * @class PermitApi
 * @extends {BaseAPI}
 */
class PermitApi extends base_1.BaseAPI {
    /**
     * Get permit for single token
     * @summary Get permit for single token
     * @param {string} token Ethereum address of the token
     * @param {string} user Ethereum address of the user
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PermitApi
     */
    getSingleTokenPermit(token, user, options) {
        return (0, exports.PermitApiFp)(this.configuration).getSingleTokenPermit(token, user, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.PermitApi = PermitApi;
//# sourceMappingURL=permit-api.js.map