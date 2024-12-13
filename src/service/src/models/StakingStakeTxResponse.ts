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
import type { ChainActivity } from './ChainActivity';
import {
    ChainActivityFromJSON,
    ChainActivityFromJSONTyped,
    ChainActivityToJSON,
    ChainActivityToJSONTyped,
} from './ChainActivity';

/**
 * 
 * @export
 * @interface StakingStakeTxResponse
 */
export interface StakingStakeTxResponse {
    /**
     * 
     * @type {ChainActivity}
     * @memberof StakingStakeTxResponse
     */
    chainActivity?: ChainActivity;
}

/**
 * Check if a given object implements the StakingStakeTxResponse interface.
 */
export function instanceOfStakingStakeTxResponse(value: object): value is StakingStakeTxResponse {
    return true;
}

export function StakingStakeTxResponseFromJSON(json: any): StakingStakeTxResponse {
    return StakingStakeTxResponseFromJSONTyped(json, false);
}

export function StakingStakeTxResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakingStakeTxResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'chainActivity': json['chainActivity'] == null ? undefined : ChainActivityFromJSON(json['chainActivity']),
    };
}

export function StakingStakeTxResponseToJSON(json: any): StakingStakeTxResponse {
    return StakingStakeTxResponseToJSONTyped(json, false);
}

export function StakingStakeTxResponseToJSONTyped(value?: StakingStakeTxResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'chainActivity': ChainActivityToJSON(value['chainActivity']),
    };
}
