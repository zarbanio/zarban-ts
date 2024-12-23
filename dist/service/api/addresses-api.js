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
exports.AddressesApi = exports.AddressesApiFactory = exports.AddressesApiFp = exports.AddressesApiAxiosParamCreator = void 0;
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
 * AddressesApi - axios parameter creator
 * @export
 */
const AddressesApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * All addresses knows to Zarban.
         * @summary Get all addresses
         * @param {string} [format] The type of addresses to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllAddresses: (format_1, ...args_1) => tslib_1.__awaiter(this, [format_1, ...args_1], void 0, function* (format, options = {}) {
            const localVarPath = `/v2/addresses`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (format !== undefined) {
                localVarQueryParameter['format'] = format;
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
exports.AddressesApiAxiosParamCreator = AddressesApiAxiosParamCreator;
/**
 * AddressesApi - functional programming interface
 * @export
 */
const AddressesApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AddressesApiAxiosParamCreator)(configuration);
    return {
        /**
         * All addresses knows to Zarban.
         * @summary Get all addresses
         * @param {string} [format] The type of addresses to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllAddresses(format, options) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a, _b, _c;
                const localVarAxiosArgs = yield localVarAxiosParamCreator.getAllAddresses(format, options);
                const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
                const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['AddressesApi.getAllAddresses']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
                return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
            });
        },
    };
};
exports.AddressesApiFp = AddressesApiFp;
/**
 * AddressesApi - factory interface
 * @export
 */
const AddressesApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AddressesApiFp)(configuration);
    return {
        /**
         * All addresses knows to Zarban.
         * @summary Get all addresses
         * @param {string} [format] The type of addresses to return
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getAllAddresses(format, options) {
            return localVarFp.getAllAddresses(format, options).then((request) => request(axios, basePath));
        },
    };
};
exports.AddressesApiFactory = AddressesApiFactory;
/**
 * AddressesApi - object-oriented interface
 * @export
 * @class AddressesApi
 * @extends {BaseAPI}
 */
class AddressesApi extends base_1.BaseAPI {
    /**
     * All addresses knows to Zarban.
     * @summary Get all addresses
     * @param {string} [format] The type of addresses to return
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AddressesApi
     */
    getAllAddresses(format, options) {
        return (0, exports.AddressesApiFp)(this.configuration).getAllAddresses(format, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AddressesApi = AddressesApi;
//# sourceMappingURL=addresses-api.js.map