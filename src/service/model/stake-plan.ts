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


// May contain unused imports in some cases
// @ts-ignore
import type { Timestamp } from './timestamp';
// May contain unused imports in some cases
// @ts-ignore
import type { Token } from './token';

/**
 * 
 * @export
 * @interface StakePlan
 */
export interface StakePlan {
    /**
     * Name of staking plan
     * @type {string}
     * @memberof StakePlan
     */
    'planName': string;
    /**
     * Ethereum address of the staking contract
     * @type {string}
     * @memberof StakePlan
     */
    'contractAddress': string;
    /**
     * Annual percentage yield of the staking plan
     * @type {string}
     * @memberof StakePlan
     */
    'apy': string;
    /**
     * 
     * @type {Token}
     * @memberof StakePlan
     */
    'stakeToken': Token;
    /**
     * 
     * @type {Token}
     * @memberof StakePlan
     */
    'rewardToken': Token;
    /**
     * 
     * @type {Timestamp}
     * @memberof StakePlan
     */
    'finishAt': Timestamp;
}
