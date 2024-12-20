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
exports.GetVaultEventsByIdTypeEnum = exports.VaultsApi = exports.VaultsApiFactory = exports.VaultsApiFp = exports.VaultsApiAxiosParamCreator = void 0;
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
 * VaultsApi - axios parameter creator
 * @export
 */
const VaultsApiAxiosParamCreator = function (configuration) {
    return {
        /**
         *
         * @summary Get a vault by ID
         * @param {number} id Vault ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVaultById: (id_1, ...args_1) => tslib_1.__awaiter(this, [id_1, ...args_1], void 0, function* (id, options = {}) {
            // verify required parameter 'id' is not null or undefined
            (0, common_1.assertParamExists)('getVaultById', 'id', id);
            const localVarPath = `/v2/vaults/{id}`
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
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Get vault events by ID
         * @param {number} id Vault ID
         * @param {GetVaultEventsByIdTypeEnum} [type] Event type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVaultEventsById: (id_1, type_1, ...args_1) => tslib_1.__awaiter(this, [id_1, type_1, ...args_1], void 0, function* (id, type, options = {}) {
            // verify required parameter 'id' is not null or undefined
            (0, common_1.assertParamExists)('getVaultEventsById', 'id', id);
            const localVarPath = `/v2/vaults/{id}/events`
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
            if (type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        }),
        /**
         *
         * @summary Get vaults by owner query
         * @param {string} [owner] Ethereum address of the owner
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVaultsByOwner: (owner_1, ...args_1) => tslib_1.__awaiter(this, [owner_1, ...args_1], void 0, function* (owner, options = {}) {
            const localVarPath = `/v2/vaults`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (owner !== undefined) {
                localVarQueryParameter['owner'] = owner;
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
exports.VaultsApiAxiosParamCreator = VaultsApiAxiosParamCreator;
/**
 * VaultsApi - functional programming interface
 * @export
 */
const VaultsApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.VaultsApiAxiosParamCreator)(configuration);
    return {
        /**
         *
         * @summary Get a vault by ID
         * @param {number} id Vault ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVaultById(id, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getVaultById(id, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['VaultsApi.getVaultById']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @summary Get vault events by ID
         * @param {number} id Vault ID
         * @param {GetVaultEventsByIdTypeEnum} [type] Event type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVaultEventsById(id, type, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getVaultEventsById(id, type, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['VaultsApi.getVaultEventsById']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
        /**
         *
         * @summary Get vaults by owner query
         * @param {string} [owner] Ethereum address of the owner
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVaultsByOwner(owner, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getVaultsByOwner(owner, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['VaultsApi.getVaultsByOwner']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
    };
};
exports.VaultsApiFp = VaultsApiFp;
/**
 * VaultsApi - factory interface
 * @export
 */
const VaultsApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.VaultsApiFp)(configuration);
    return {
        /**
         *
         * @summary Get a vault by ID
         * @param {number} id Vault ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVaultById(id, options) {
            return localVarFp.getVaultById(id, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get vault events by ID
         * @param {number} id Vault ID
         * @param {GetVaultEventsByIdTypeEnum} [type] Event type
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVaultEventsById(id, type, options) {
            return localVarFp.getVaultEventsById(id, type, options).then((request) => request(axios, basePath));
        },
        /**
         *
         * @summary Get vaults by owner query
         * @param {string} [owner] Ethereum address of the owner
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getVaultsByOwner(owner, options) {
            return localVarFp.getVaultsByOwner(owner, options).then((request) => request(axios, basePath));
        },
    };
};
exports.VaultsApiFactory = VaultsApiFactory;
/**
 * VaultsApi - object-oriented interface
 * @export
 * @class VaultsApi
 * @extends {BaseAPI}
 */
class VaultsApi extends base_1.BaseAPI {
    /**
     *
     * @summary Get a vault by ID
     * @param {number} id Vault ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VaultsApi
     */
    getVaultById(id, options) {
        return (0, exports.VaultsApiFp)(this.configuration).getVaultById(id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get vault events by ID
     * @param {number} id Vault ID
     * @param {GetVaultEventsByIdTypeEnum} [type] Event type
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VaultsApi
     */
    getVaultEventsById(id, type, options) {
        return (0, exports.VaultsApiFp)(this.configuration).getVaultEventsById(id, type, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     *
     * @summary Get vaults by owner query
     * @param {string} [owner] Ethereum address of the owner
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof VaultsApi
     */
    getVaultsByOwner(owner, options) {
        return (0, exports.VaultsApiFp)(this.configuration).getVaultsByOwner(owner, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.VaultsApi = VaultsApi;
/**
 * @export
 */
exports.GetVaultEventsByIdTypeEnum = {
    REPAY: 'repay',
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
    MINT: 'mint'
};
//# sourceMappingURL=vaults-api.js.map