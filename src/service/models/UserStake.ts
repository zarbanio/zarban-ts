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
 * @interface UserStake
 */
export interface UserStake {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof UserStake
     */
    user: string;
    /**
     * The amount of asset staked in native token units
     * @type {{ [key: string]: string; }}
     * @memberof UserStake
     */
    balance: { [key: string]: string; };
    /**
     * The amount of unclaimed reward in native token units
     * @type {{ [key: string]: string; }}
     * @memberof UserStake
     */
    unclaimedReward: { [key: string]: string; };
    /**
     * Ethereum address of the staking contract
     * @type {string}
     * @memberof UserStake
     */
    contractAddress: string;
    /**
     * Name of staking plan
     * @type {string}
     * @memberof UserStake
     */
    planName: string;
}

/**
 * Check if a given object implements the UserStake interface.
 */
export function instanceOfUserStake(value: object): value is UserStake {
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('balance' in value) || value['balance'] === undefined) return false;
    if (!('unclaimedReward' in value) || value['unclaimedReward'] === undefined) return false;
    if (!('contractAddress' in value) || value['contractAddress'] === undefined) return false;
    if (!('planName' in value) || value['planName'] === undefined) return false;
    return true;
}

export function UserStakeFromJSON(json: any): UserStake {
    return UserStakeFromJSONTyped(json, false);
}

export function UserStakeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserStake {
    if (json == null) {
        return json;
    }
    return {
        
        'user': json['user'],
        'balance': json['balance'],
        'unclaimedReward': json['unclaimedReward'],
        'contractAddress': json['contractAddress'],
        'planName': json['planName'],
    };
}

export function UserStakeToJSON(json: any): UserStake {
    return UserStakeToJSONTyped(json, false);
}

export function UserStakeToJSONTyped(value?: UserStake | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user': value['user'],
        'balance': value['balance'],
        'unclaimedReward': value['unclaimedReward'],
        'contractAddress': value['contractAddress'],
        'planName': value['planName'],
    };
}
