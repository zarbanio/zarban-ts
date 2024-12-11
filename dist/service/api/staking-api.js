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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StakingApi = exports.StakingApiFactory = exports.StakingApiFp = exports.StakingApiAxiosParamCreator = void 0;
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
 * StakingApi - axios parameter creator
 * @export
 */
const StakingApiAxiosParamCreator = function (configuration) {
    return {
        /**
         * Collect staking reward
         * @summary Collect staking reward
         * @param {StakingCollectRewardTxRequest} stakingCollectRewardTxRequest Collect reward transaction request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        collectStakingReward: async (stakingCollectRewardTxRequest, options = {}) => {
            // verify required parameter 'stakingCollectRewardTxRequest' is not null or undefined
            (0, common_1.assertParamExists)('collectStakingReward', 'stakingCollectRewardTxRequest', stakingCollectRewardTxRequest);
            const localVarPath = `/v2/staking/tx/collectreward`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(stakingCollectRewardTxRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Get staking plans
         * @summary Get staking plans
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStakingPlans: async (options = {}) => {
            const localVarPath = `/v2/staking/plans`;
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
        /**
         * Get user staking stats
         * @summary Get user staking stats
         * @param {string} [user] Ethereum address of the user
         * @param {string} [address] Ethereum address of the staking contract
         * @param {boolean} [active] Filter by active stakes
         * @param {number} [cursor] Cursor for pagination
         * @param {number} [limit] Limit the number of stakes returned (default is 50)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserStakingStats: async (user, address, active, cursor, limit, options = {}) => {
            const localVarPath = `/v2/staking/stats`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'GET' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            if (user !== undefined) {
                localVarQueryParameter['user'] = user;
            }
            if (address !== undefined) {
                localVarQueryParameter['address'] = address;
            }
            if (active !== undefined) {
                localVarQueryParameter['active'] = active;
            }
            if (cursor !== undefined) {
                localVarQueryParameter['cursor'] = cursor;
            }
            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Stake to staking contract
         * @summary Stake to staking contract
         * @param {StakingStakeTxRequest} stakingStakeTxRequest Stake transaction request, if amount is not provided, then the whole wallet balance will be used
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stakeToStakingContract: async (stakingStakeTxRequest, options = {}) => {
            // verify required parameter 'stakingStakeTxRequest' is not null or undefined
            (0, common_1.assertParamExists)('stakeToStakingContract', 'stakingStakeTxRequest', stakingStakeTxRequest);
            const localVarPath = `/v2/staking/tx/stake`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(stakingStakeTxRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Withdraw staked asset
         * @summary Withdraw staked asset
         * @param {StakingWithdrawTxRequest} stakingWithdrawTxRequest Withdraw transaction request, if amount is not provided, then the whole staked amount will be withdrawn
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        withdrawStakedAsset: async (stakingWithdrawTxRequest, options = {}) => {
            // verify required parameter 'stakingWithdrawTxRequest' is not null or undefined
            (0, common_1.assertParamExists)('withdrawStakedAsset', 'stakingWithdrawTxRequest', stakingWithdrawTxRequest);
            const localVarPath = `/v2/staking/tx/withdraw`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new url_1.URL(localVarPath, common_1.DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = Object.assign(Object.assign({ method: 'POST' }, baseOptions), options);
            const localVarHeaderParameter = {};
            const localVarQueryParameter = {};
            localVarHeaderParameter['Content-Type'] = 'application/json';
            (0, common_1.setSearchParams)(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = Object.assign(Object.assign(Object.assign({}, localVarHeaderParameter), headersFromBaseOptions), options.headers);
            localVarRequestOptions.data = (0, common_1.serializeDataIfNeeded)(stakingWithdrawTxRequest, localVarRequestOptions, configuration);
            return {
                url: (0, common_1.toPathString)(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    };
};
exports.StakingApiAxiosParamCreator = StakingApiAxiosParamCreator;
/**
 * StakingApi - functional programming interface
 * @export
 */
const StakingApiFp = function (configuration) {
    const localVarAxiosParamCreator = (0, exports.StakingApiAxiosParamCreator)(configuration);
    return {
        /**
         * Collect staking reward
         * @summary Collect staking reward
         * @param {StakingCollectRewardTxRequest} stakingCollectRewardTxRequest Collect reward transaction request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async collectStakingReward(stakingCollectRewardTxRequest, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.collectStakingReward(stakingCollectRewardTxRequest, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['StakingApi.collectStakingReward']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get staking plans
         * @summary Get staking plans
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getStakingPlans(options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.getStakingPlans(options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['StakingApi.getStakingPlans']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Get user staking stats
         * @summary Get user staking stats
         * @param {string} [user] Ethereum address of the user
         * @param {string} [address] Ethereum address of the staking contract
         * @param {boolean} [active] Filter by active stakes
         * @param {number} [cursor] Cursor for pagination
         * @param {number} [limit] Limit the number of stakes returned (default is 50)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getUserStakingStats(user, address, active, cursor, limit, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.getUserStakingStats(user, address, active, cursor, limit, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['StakingApi.getUserStakingStats']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Stake to staking contract
         * @summary Stake to staking contract
         * @param {StakingStakeTxRequest} stakingStakeTxRequest Stake transaction request, if amount is not provided, then the whole wallet balance will be used
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async stakeToStakingContract(stakingStakeTxRequest, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.stakeToStakingContract(stakingStakeTxRequest, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['StakingApi.stakeToStakingContract']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * Withdraw staked asset
         * @summary Withdraw staked asset
         * @param {StakingWithdrawTxRequest} stakingWithdrawTxRequest Withdraw transaction request, if amount is not provided, then the whole staked amount will be withdrawn
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async withdrawStakedAsset(stakingWithdrawTxRequest, options) {
            var _a, _b, _c;
            const localVarAxiosArgs = await localVarAxiosParamCreator.withdrawStakedAsset(stakingWithdrawTxRequest, options);
            const localVarOperationServerIndex = (_a = configuration === null || configuration === void 0 ? void 0 : configuration.serverIndex) !== null && _a !== void 0 ? _a : 0;
            const localVarOperationServerBasePath = (_c = (_b = base_1.operationServerMap['StakingApi.withdrawStakedAsset']) === null || _b === void 0 ? void 0 : _b[localVarOperationServerIndex]) === null || _c === void 0 ? void 0 : _c.url;
            return (axios, basePath) => (0, common_1.createRequestFunction)(localVarAxiosArgs, axios_1.default, base_1.BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    };
};
exports.StakingApiFp = StakingApiFp;
/**
 * StakingApi - factory interface
 * @export
 */
const StakingApiFactory = function (configuration, basePath, axios) {
    const localVarFp = (0, exports.StakingApiFp)(configuration);
    return {
        /**
         * Collect staking reward
         * @summary Collect staking reward
         * @param {StakingCollectRewardTxRequest} stakingCollectRewardTxRequest Collect reward transaction request
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        collectStakingReward(stakingCollectRewardTxRequest, options) {
            return localVarFp.collectStakingReward(stakingCollectRewardTxRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Get staking plans
         * @summary Get staking plans
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getStakingPlans(options) {
            return localVarFp.getStakingPlans(options).then((request) => request(axios, basePath));
        },
        /**
         * Get user staking stats
         * @summary Get user staking stats
         * @param {string} [user] Ethereum address of the user
         * @param {string} [address] Ethereum address of the staking contract
         * @param {boolean} [active] Filter by active stakes
         * @param {number} [cursor] Cursor for pagination
         * @param {number} [limit] Limit the number of stakes returned (default is 50)
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getUserStakingStats(user, address, active, cursor, limit, options) {
            return localVarFp.getUserStakingStats(user, address, active, cursor, limit, options).then((request) => request(axios, basePath));
        },
        /**
         * Stake to staking contract
         * @summary Stake to staking contract
         * @param {StakingStakeTxRequest} stakingStakeTxRequest Stake transaction request, if amount is not provided, then the whole wallet balance will be used
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        stakeToStakingContract(stakingStakeTxRequest, options) {
            return localVarFp.stakeToStakingContract(stakingStakeTxRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Withdraw staked asset
         * @summary Withdraw staked asset
         * @param {StakingWithdrawTxRequest} stakingWithdrawTxRequest Withdraw transaction request, if amount is not provided, then the whole staked amount will be withdrawn
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        withdrawStakedAsset(stakingWithdrawTxRequest, options) {
            return localVarFp.withdrawStakedAsset(stakingWithdrawTxRequest, options).then((request) => request(axios, basePath));
        },
    };
};
exports.StakingApiFactory = StakingApiFactory;
/**
 * StakingApi - object-oriented interface
 * @export
 * @class StakingApi
 * @extends {BaseAPI}
 */
class StakingApi extends base_1.BaseAPI {
    /**
     * Collect staking reward
     * @summary Collect staking reward
     * @param {StakingCollectRewardTxRequest} stakingCollectRewardTxRequest Collect reward transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApi
     */
    collectStakingReward(stakingCollectRewardTxRequest, options) {
        return (0, exports.StakingApiFp)(this.configuration).collectStakingReward(stakingCollectRewardTxRequest, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get staking plans
     * @summary Get staking plans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApi
     */
    getStakingPlans(options) {
        return (0, exports.StakingApiFp)(this.configuration).getStakingPlans(options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get user staking stats
     * @summary Get user staking stats
     * @param {string} [user] Ethereum address of the user
     * @param {string} [address] Ethereum address of the staking contract
     * @param {boolean} [active] Filter by active stakes
     * @param {number} [cursor] Cursor for pagination
     * @param {number} [limit] Limit the number of stakes returned (default is 50)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApi
     */
    getUserStakingStats(user, address, active, cursor, limit, options) {
        return (0, exports.StakingApiFp)(this.configuration).getUserStakingStats(user, address, active, cursor, limit, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Stake to staking contract
     * @summary Stake to staking contract
     * @param {StakingStakeTxRequest} stakingStakeTxRequest Stake transaction request, if amount is not provided, then the whole wallet balance will be used
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApi
     */
    stakeToStakingContract(stakingStakeTxRequest, options) {
        return (0, exports.StakingApiFp)(this.configuration).stakeToStakingContract(stakingStakeTxRequest, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Withdraw staked asset
     * @summary Withdraw staked asset
     * @param {StakingWithdrawTxRequest} stakingWithdrawTxRequest Withdraw transaction request, if amount is not provided, then the whole staked amount will be withdrawn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApi
     */
    withdrawStakedAsset(stakingWithdrawTxRequest, options) {
        return (0, exports.StakingApiFp)(this.configuration).withdrawStakedAsset(stakingWithdrawTxRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
exports.StakingApi = StakingApi;
