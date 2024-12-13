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
exports.GetOtpChannelEnum = exports.GenerateJwtTokenDurationEnum = exports.AuthApi = exports.AuthApiFactory = exports.AuthApiFp = exports.AuthApiAxiosParamCreator = void 0;
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
 * AuthApi - axios parameter creator
 * @export
 */
const AuthApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Authenticate with Telegram and get a JWT token.
         * @summary Authenticate with Telegram
         * @param {AuthTelegramRequest} authTelegramRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authenticateWithTelegram: async (authTelegramRequest, options = {}) => {
            // verify required parameter 'authTelegramRequest' is not null or undefined
            (0, common_1.assertParamExists)('authenticateWithTelegram', 'authTelegramRequest', authTelegramRequest);
            const localVarPath = `/auth/telegram`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(authTelegramRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Generate a JWT token.
         * @summary Generate a JWT token
         * @param {GenerateJwtTokenDurationEnum} duration Token duration in days
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateJwtToken: async (duration, options = {}) => {
            // verify required parameter 'duration' is not null or undefined
            (0, common_1.assertParamExists)('generateJwtToken', 'duration', duration);
            const localVarPath = `/auth/token`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            await (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration);
            if (duration !== undefined) {
                localVarQueryParameter['duration'] = duration;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get OTP for the user.
         * @summary Get OTP
         * @param {GetOtpChannelEnum} channel Channel to send OTP
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOtp: async (channel, options = {}) => {
            // verify required parameter 'channel' is not null or undefined
            (0, common_1.assertParamExists)('getOtp', 'channel', channel);
            const localVarPath = `/auth/otp`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            // authentication bearerAuth required
            // http bearer authentication required
            await (0, common_1.setBearerAuthToObject)(localVarHeaderParameter, configuration);
            if (channel !== undefined) {
                localVarQueryParameter['channel'] = channel;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Login with email and password and get a JWT token.
         * @summary Login with email and password
         * @param {LoginRequest} loginRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginWithEmailAndPassword: async (loginRequest, options = {}) => {
            // verify required parameter 'loginRequest' is not null or undefined
            (0, common_1.assertParamExists)('loginWithEmailAndPassword', 'loginRequest', loginRequest);
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(loginRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * signup with email and password and get a JWT token.
         * @summary signup with email and password
         * @param {SignUpRequest} signUpRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signupWithEmailAndPassword: async (signUpRequest, options = {}) => {
            // verify required parameter 'signUpRequest' is not null or undefined
            (0, common_1.assertParamExists)('signupWithEmailAndPassword', 'signUpRequest', signUpRequest);
            const localVarPath = `/auth/signup`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(signUpRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Verify the email of the user.
         * @summary Verify email
         * @param {string} token Verification token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyUserEmail: async (token, options = {}) => {
            // verify required parameter 'token' is not null or undefined
            (0, common_1.assertParamExists)('verifyUserEmail', 'token', token);
            const localVarPath = `/verify-email`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (token !== undefined) {
                localVarQueryParameter['token'] = token;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.AuthApiAxiosParamCreator = AuthApiAxiosParamCreator;
/**
 * AuthApi - functional programming interface
 * @export
 */
const AuthApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.AuthApiAxiosParamCreator)(configuration);
    return {
        /**
         * Authenticate with Telegram and get a JWT token.
         * @summary Authenticate with Telegram
         * @param {AuthTelegramRequest} authTelegramRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authenticateWithTelegram(authTelegramRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authenticateWithTelegram(authTelegramRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = base_1.operationServerMap['AuthApi.authenticateWithTelegram']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Generate a JWT token.
         * @summary Generate a JWT token
         * @param {GenerateJwtTokenDurationEnum} duration Token duration in days
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateJwtToken(duration, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateJwtToken(duration, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = base_1.operationServerMap['AuthApi.generateJwtToken']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get OTP for the user.
         * @summary Get OTP
         * @param {GetOtpChannelEnum} channel Channel to send OTP
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getOtp(channel, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getOtp(channel, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = base_1.operationServerMap['AuthApi.getOtp']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Login with email and password and get a JWT token.
         * @summary Login with email and password
         * @param {LoginRequest} loginRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginWithEmailAndPassword(loginRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginWithEmailAndPassword(loginRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = base_1.operationServerMap['AuthApi.loginWithEmailAndPassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * signup with email and password and get a JWT token.
         * @summary signup with email and password
         * @param {SignUpRequest} signUpRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async signupWithEmailAndPassword(signUpRequest, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.signupWithEmailAndPassword(signUpRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = base_1.operationServerMap['AuthApi.signupWithEmailAndPassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Verify the email of the user.
         * @summary Verify email
         * @param {string} token Verification token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyUserEmail(token, options) {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyUserEmail(token, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = base_1.operationServerMap['AuthApi.verifyUserEmail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
exports.AuthApiFp = AuthApiFp;
/**
 * AuthApi - factory interface
 * @export
 */
const AuthApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.AuthApiFp)(configuration);
    return {
        /**
         * Authenticate with Telegram and get a JWT token.
         * @summary Authenticate with Telegram
         * @param {AuthTelegramRequest} authTelegramRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authenticateWithTelegram(authTelegramRequest, options) {
            return localVarFp.authenticateWithTelegram(authTelegramRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Generate a JWT token.
         * @summary Generate a JWT token
         * @param {GenerateJwtTokenDurationEnum} duration Token duration in days
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateJwtToken(duration, options) {
            return localVarFp.generateJwtToken(duration, options).then((request) => request(axios, basePath));
        },
        /**
         * Get OTP for the user.
         * @summary Get OTP
         * @param {GetOtpChannelEnum} channel Channel to send OTP
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getOtp(channel, options) {
            return localVarFp.getOtp(channel, options).then((request) => request(axios, basePath));
        },
        /**
         * Login with email and password and get a JWT token.
         * @summary Login with email and password
         * @param {LoginRequest} loginRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginWithEmailAndPassword(loginRequest, options) {
            return localVarFp.loginWithEmailAndPassword(loginRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * signup with email and password and get a JWT token.
         * @summary signup with email and password
         * @param {SignUpRequest} signUpRequest
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        signupWithEmailAndPassword(signUpRequest, options) {
            return localVarFp.signupWithEmailAndPassword(signUpRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Verify the email of the user.
         * @summary Verify email
         * @param {string} token Verification token
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyUserEmail(token, options) {
            return localVarFp.verifyUserEmail(token, options).then((request) => request(axios, basePath));
        },
    };
};
exports.AuthApiFactory = AuthApiFactory;
/**
 * AuthApi - object-oriented interface
 * @export
 * @class AuthApi
 * @extends {BaseAPI}
 */
class AuthApi extends base_1.BaseAPI {
    /**
     * Authenticate with Telegram and get a JWT token.
     * @summary Authenticate with Telegram
     * @param {AuthTelegramRequest} authTelegramRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    authenticateWithTelegram(authTelegramRequest, options) {
        return (0, exports.AuthApiFp)(this.configuration).authenticateWithTelegram(authTelegramRequest, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Generate a JWT token.
     * @summary Generate a JWT token
     * @param {GenerateJwtTokenDurationEnum} duration Token duration in days
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    generateJwtToken(duration, options) {
        return (0, exports.AuthApiFp)(this.configuration).generateJwtToken(duration, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get OTP for the user.
     * @summary Get OTP
     * @param {GetOtpChannelEnum} channel Channel to send OTP
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    getOtp(channel, options) {
        return (0, exports.AuthApiFp)(this.configuration).getOtp(channel, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Login with email and password and get a JWT token.
     * @summary Login with email and password
     * @param {LoginRequest} loginRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    loginWithEmailAndPassword(loginRequest, options) {
        return (0, exports.AuthApiFp)(this.configuration).loginWithEmailAndPassword(loginRequest, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * signup with email and password and get a JWT token.
     * @summary signup with email and password
     * @param {SignUpRequest} signUpRequest
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    signupWithEmailAndPassword(signUpRequest, options) {
        return (0, exports.AuthApiFp)(this.configuration).signupWithEmailAndPassword(signUpRequest, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Verify the email of the user.
     * @summary Verify email
     * @param {string} token Verification token
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthApi
     */
    verifyUserEmail(token, options) {
        return (0, exports.AuthApiFp)(this.configuration).verifyUserEmail(token, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.AuthApi = AuthApi;
/**
 * @export
 */
exports.GenerateJwtTokenDurationEnum = {
    NUMBER_7: 7,
    NUMBER_15: 15,
    NUMBER_30: 30,
    NUMBER_90: 90
};
/**
 * @export
 */
exports.GetOtpChannelEnum = {
    PHONE: 'phone'
};
//# sourceMappingURL=auth-api.js.map