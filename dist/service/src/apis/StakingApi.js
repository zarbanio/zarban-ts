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
exports.StakingApi = void 0;
const tslib_1 = require("tslib");
const runtime = tslib_1.__importStar(require("../runtime"));
const index_1 = require("../models/index");
/**
 *
 */
class StakingApi extends runtime.BaseAPI {
    /**
     * Collect staking reward
     * Collect staking reward
     */
    async collectStakingRewardRaw(requestParameters, initOverrides) {
        if (requestParameters['stakingCollectRewardTxRequest'] == null) {
            throw new runtime.RequiredError('stakingCollectRewardTxRequest', 'Required parameter "stakingCollectRewardTxRequest" was null or undefined when calling collectStakingReward().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/v2/staking/tx/collectreward`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.StakingCollectRewardTxRequestToJSON)(requestParameters['stakingCollectRewardTxRequest']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StakingCollectRewardTxResponseFromJSON)(jsonValue));
    }
    /**
     * Collect staking reward
     * Collect staking reward
     */
    async collectStakingReward(requestParameters, initOverrides) {
        const response = await this.collectStakingRewardRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Get staking plans
     * Get staking plans
     */
    async getStakingPlansRaw(initOverrides) {
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/v2/staking/plans`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StakePlansResponseFromJSON)(jsonValue));
    }
    /**
     * Get staking plans
     * Get staking plans
     */
    async getStakingPlans(initOverrides) {
        const response = await this.getStakingPlansRaw(initOverrides);
        return await response.value();
    }
    /**
     * Get user staking stats
     * Get user staking stats
     */
    async getUserStakingStatsRaw(requestParameters, initOverrides) {
        const queryParameters = {};
        if (requestParameters['user'] != null) {
            queryParameters['user'] = requestParameters['user'];
        }
        if (requestParameters['address'] != null) {
            queryParameters['address'] = requestParameters['address'];
        }
        if (requestParameters['active'] != null) {
            queryParameters['active'] = requestParameters['active'];
        }
        if (requestParameters['cursor'] != null) {
            queryParameters['cursor'] = requestParameters['cursor'];
        }
        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/v2/staking/stats`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.UserStakesResponseFromJSON)(jsonValue));
    }
    /**
     * Get user staking stats
     * Get user staking stats
     */
    async getUserStakingStats(requestParameters = {}, initOverrides) {
        const response = await this.getUserStakingStatsRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Stake to staking contract
     * Stake to staking contract
     */
    async stakeToStakingContractRaw(requestParameters, initOverrides) {
        if (requestParameters['stakingStakeTxRequest'] == null) {
            throw new runtime.RequiredError('stakingStakeTxRequest', 'Required parameter "stakingStakeTxRequest" was null or undefined when calling stakeToStakingContract().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/v2/staking/tx/stake`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.StakingStakeTxRequestToJSON)(requestParameters['stakingStakeTxRequest']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StakingStakeTxResponseFromJSON)(jsonValue));
    }
    /**
     * Stake to staking contract
     * Stake to staking contract
     */
    async stakeToStakingContract(requestParameters, initOverrides) {
        const response = await this.stakeToStakingContractRaw(requestParameters, initOverrides);
        return await response.value();
    }
    /**
     * Withdraw staked asset
     * Withdraw staked asset
     */
    async withdrawStakedAssetRaw(requestParameters, initOverrides) {
        if (requestParameters['stakingWithdrawTxRequest'] == null) {
            throw new runtime.RequiredError('stakingWithdrawTxRequest', 'Required parameter "stakingWithdrawTxRequest" was null or undefined when calling withdrawStakedAsset().');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/v2/staking/tx/withdraw`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, index_1.StakingWithdrawTxRequestToJSON)(requestParameters['stakingWithdrawTxRequest']),
        }, initOverrides);
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, index_1.StakingWithdrawTxResponseFromJSON)(jsonValue));
    }
    /**
     * Withdraw staked asset
     * Withdraw staked asset
     */
    async withdrawStakedAsset(requestParameters, initOverrides) {
        const response = await this.withdrawStakedAssetRaw(requestParameters, initOverrides);
        return await response.value();
    }
}
exports.StakingApi = StakingApi;
//# sourceMappingURL=StakingApi.js.map