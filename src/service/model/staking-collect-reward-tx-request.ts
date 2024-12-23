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



/**
 * 
 * @export
 * @interface StakingCollectRewardTxRequest
 */
export interface StakingCollectRewardTxRequest {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof StakingCollectRewardTxRequest
     */
    'user': string;
    /**
     * Ethereum address of the staking contract
     * @type {string}
     * @memberof StakingCollectRewardTxRequest
     */
    'contractAddress': string;
}

