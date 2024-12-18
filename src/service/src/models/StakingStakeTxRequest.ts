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

import { mapValues } from '../runtime';
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
    user: string;
    /**
     * Ethereum address of the staking contract
     * @type {string}
     * @memberof StakingStakeTxRequest
     */
    contractAddress: string;
    /**
     * The amount of asset to stake in native token units
     * @type {string}
     * @memberof StakingStakeTxRequest
     */
    amount?: string;
}

/**
 * Check if a given object implements the StakingStakeTxRequest interface.
 */
export function instanceOfStakingStakeTxRequest(value: object): value is StakingStakeTxRequest {
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('contractAddress' in value) || value['contractAddress'] === undefined) return false;
    return true;
}

export function StakingStakeTxRequestFromJSON(json: any): StakingStakeTxRequest {
    return StakingStakeTxRequestFromJSONTyped(json, false);
}

export function StakingStakeTxRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakingStakeTxRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'user': json['user'],
        'contractAddress': json['contractAddress'],
        'amount': json['amount'] == null ? undefined : json['amount'],
    };
}

export function StakingStakeTxRequestToJSON(json: any): StakingStakeTxRequest {
    return StakingStakeTxRequestToJSONTyped(json, false);
}

export function StakingStakeTxRequestToJSONTyped(value?: StakingStakeTxRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user': value['user'],
        'contractAddress': value['contractAddress'],
        'amount': value['amount'],
    };
}

