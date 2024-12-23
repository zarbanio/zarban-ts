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
 * @interface UserStake
 */
export interface UserStake {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof UserStake
     */
    'user': string;
    /**
     * The amount of asset staked in native token units
     * @type {{ [key: string]: string | undefined; }}
     * @memberof UserStake
     */
    'balance': { [key: string]: string | undefined; };
    /**
     * The amount of unclaimed reward in native token units
     * @type {{ [key: string]: string | undefined; }}
     * @memberof UserStake
     */
    'unclaimedReward': { [key: string]: string | undefined; };
    /**
     * Ethereum address of the staking contract
     * @type {string}
     * @memberof UserStake
     */
    'contractAddress': string;
    /**
     * Name of staking plan
     * @type {string}
     * @memberof UserStake
     */
    'planName': string;
}

