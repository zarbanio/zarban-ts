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
import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
import { type RequestArgs, BaseAPI } from '../base';
import type { StakePlansResponse } from '../model';
import type { StakingCollectRewardTxRequest } from '../model';
import type { StakingCollectRewardTxResponse } from '../model';
import type { StakingStakeTxRequest } from '../model';
import type { StakingStakeTxResponse } from '../model';
import type { StakingWithdrawTxRequest } from '../model';
import type { StakingWithdrawTxResponse } from '../model';
import type { UserStakesResponse } from '../model';
/**
 * StakingApi - axios parameter creator
 * @export
 */
export declare const StakingApiAxiosParamCreator: (configuration?: Configuration) => {
    /**
     * Collect staking reward
     * @summary Collect staking reward
     * @param {StakingCollectRewardTxRequest} stakingCollectRewardTxRequest Collect reward transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    collectStakingReward: (stakingCollectRewardTxRequest: StakingCollectRewardTxRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Get staking plans
     * @summary Get staking plans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStakingPlans: (options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
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
    getUserStakingStats: (user?: string, address?: string, active?: boolean, cursor?: number, limit?: number, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Stake to staking contract
     * @summary Stake to staking contract
     * @param {StakingStakeTxRequest} stakingStakeTxRequest Stake transaction request, if amount is not provided, then the whole wallet balance will be used
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    stakeToStakingContract: (stakingStakeTxRequest: StakingStakeTxRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
    /**
     * Withdraw staked asset
     * @summary Withdraw staked asset
     * @param {StakingWithdrawTxRequest} stakingWithdrawTxRequest Withdraw transaction request, if amount is not provided, then the whole staked amount will be withdrawn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    withdrawStakedAsset: (stakingWithdrawTxRequest: StakingWithdrawTxRequest, options?: RawAxiosRequestConfig) => Promise<RequestArgs>;
};
/**
 * StakingApi - functional programming interface
 * @export
 */
export declare const StakingApiFp: (configuration?: Configuration) => {
    /**
     * Collect staking reward
     * @summary Collect staking reward
     * @param {StakingCollectRewardTxRequest} stakingCollectRewardTxRequest Collect reward transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    collectStakingReward(stakingCollectRewardTxRequest: StakingCollectRewardTxRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StakingCollectRewardTxResponse>>;
    /**
     * Get staking plans
     * @summary Get staking plans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStakingPlans(options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StakePlansResponse>>;
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
    getUserStakingStats(user?: string, address?: string, active?: boolean, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<UserStakesResponse>>;
    /**
     * Stake to staking contract
     * @summary Stake to staking contract
     * @param {StakingStakeTxRequest} stakingStakeTxRequest Stake transaction request, if amount is not provided, then the whole wallet balance will be used
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    stakeToStakingContract(stakingStakeTxRequest: StakingStakeTxRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StakingStakeTxResponse>>;
    /**
     * Withdraw staked asset
     * @summary Withdraw staked asset
     * @param {StakingWithdrawTxRequest} stakingWithdrawTxRequest Withdraw transaction request, if amount is not provided, then the whole staked amount will be withdrawn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    withdrawStakedAsset(stakingWithdrawTxRequest: StakingWithdrawTxRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<StakingWithdrawTxResponse>>;
};
/**
 * StakingApi - factory interface
 * @export
 */
export declare const StakingApiFactory: (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) => {
    /**
     * Collect staking reward
     * @summary Collect staking reward
     * @param {StakingCollectRewardTxRequest} stakingCollectRewardTxRequest Collect reward transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    collectStakingReward(stakingCollectRewardTxRequest: StakingCollectRewardTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<StakingCollectRewardTxResponse>;
    /**
     * Get staking plans
     * @summary Get staking plans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStakingPlans(options?: RawAxiosRequestConfig): AxiosPromise<StakePlansResponse>;
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
    getUserStakingStats(user?: string, address?: string, active?: boolean, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<UserStakesResponse>;
    /**
     * Stake to staking contract
     * @summary Stake to staking contract
     * @param {StakingStakeTxRequest} stakingStakeTxRequest Stake transaction request, if amount is not provided, then the whole wallet balance will be used
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    stakeToStakingContract(stakingStakeTxRequest: StakingStakeTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<StakingStakeTxResponse>;
    /**
     * Withdraw staked asset
     * @summary Withdraw staked asset
     * @param {StakingWithdrawTxRequest} stakingWithdrawTxRequest Withdraw transaction request, if amount is not provided, then the whole staked amount will be withdrawn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    withdrawStakedAsset(stakingWithdrawTxRequest: StakingWithdrawTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<StakingWithdrawTxResponse>;
};
/**
 * StakingApi - interface
 * @export
 * @interface StakingApi
 */
export interface StakingApiInterface {
    /**
     * Collect staking reward
     * @summary Collect staking reward
     * @param {StakingCollectRewardTxRequest} stakingCollectRewardTxRequest Collect reward transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApiInterface
     */
    collectStakingReward(stakingCollectRewardTxRequest: StakingCollectRewardTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<StakingCollectRewardTxResponse>;
    /**
     * Get staking plans
     * @summary Get staking plans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApiInterface
     */
    getStakingPlans(options?: RawAxiosRequestConfig): AxiosPromise<StakePlansResponse>;
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
     * @memberof StakingApiInterface
     */
    getUserStakingStats(user?: string, address?: string, active?: boolean, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): AxiosPromise<UserStakesResponse>;
    /**
     * Stake to staking contract
     * @summary Stake to staking contract
     * @param {StakingStakeTxRequest} stakingStakeTxRequest Stake transaction request, if amount is not provided, then the whole wallet balance will be used
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApiInterface
     */
    stakeToStakingContract(stakingStakeTxRequest: StakingStakeTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<StakingStakeTxResponse>;
    /**
     * Withdraw staked asset
     * @summary Withdraw staked asset
     * @param {StakingWithdrawTxRequest} stakingWithdrawTxRequest Withdraw transaction request, if amount is not provided, then the whole staked amount will be withdrawn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApiInterface
     */
    withdrawStakedAsset(stakingWithdrawTxRequest: StakingWithdrawTxRequest, options?: RawAxiosRequestConfig): AxiosPromise<StakingWithdrawTxResponse>;
}
/**
 * StakingApi - object-oriented interface
 * @export
 * @class StakingApi
 * @extends {BaseAPI}
 */
export declare class StakingApi extends BaseAPI implements StakingApiInterface {
    /**
     * Collect staking reward
     * @summary Collect staking reward
     * @param {StakingCollectRewardTxRequest} stakingCollectRewardTxRequest Collect reward transaction request
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApi
     */
    collectStakingReward(stakingCollectRewardTxRequest: StakingCollectRewardTxRequest, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<StakingCollectRewardTxResponse, any>>;
    /**
     * Get staking plans
     * @summary Get staking plans
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApi
     */
    getStakingPlans(options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<StakePlansResponse, any>>;
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
    getUserStakingStats(user?: string, address?: string, active?: boolean, cursor?: number, limit?: number, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<UserStakesResponse, any>>;
    /**
     * Stake to staking contract
     * @summary Stake to staking contract
     * @param {StakingStakeTxRequest} stakingStakeTxRequest Stake transaction request, if amount is not provided, then the whole wallet balance will be used
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApi
     */
    stakeToStakingContract(stakingStakeTxRequest: StakingStakeTxRequest, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<StakingStakeTxResponse, any>>;
    /**
     * Withdraw staked asset
     * @summary Withdraw staked asset
     * @param {StakingWithdrawTxRequest} stakingWithdrawTxRequest Withdraw transaction request, if amount is not provided, then the whole staked amount will be withdrawn
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StakingApi
     */
    withdrawStakedAsset(stakingWithdrawTxRequest: StakingWithdrawTxRequest, options?: RawAxiosRequestConfig): Promise<globalAxios.AxiosResponse<StakingWithdrawTxResponse, any>>;
}
//# sourceMappingURL=staking-api.d.ts.map