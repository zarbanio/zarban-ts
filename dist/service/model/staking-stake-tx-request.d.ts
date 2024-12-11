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
 * @interface StakingStakeTxRequest
 */
export interface StakingStakeTxRequest {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof StakingStakeTxRequest
     */
    'user': string;
    /**
     * Ethereum address of the staking contract
     * @type {string}
     * @memberof StakingStakeTxRequest
     */
    'contractAddress': string;
    /**
     * The amount of asset to stake in native token units
     * @type {string}
     * @memberof StakingStakeTxRequest
     */
    'amount'?: string;
}
