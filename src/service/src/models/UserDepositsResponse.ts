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
import type { LendingpoolDeposit } from './LendingpoolDeposit';
import {
    LendingpoolDepositFromJSON,
    LendingpoolDepositFromJSONTyped,
    LendingpoolDepositToJSON,
    LendingpoolDepositToJSONTyped,
} from './LendingpoolDeposit';

/**
 * 
 * @export
 * @interface UserDepositsResponse
 */
export interface UserDepositsResponse {
    /**
     * 
     * @type {Array<LendingpoolDeposit>}
     * @memberof UserDepositsResponse
     */
    data: Array<LendingpoolDeposit>;
}

/**
 * Check if a given object implements the UserDepositsResponse interface.
 */
export function instanceOfUserDepositsResponse(value: object): value is UserDepositsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function UserDepositsResponseFromJSON(json: any): UserDepositsResponse {
    return UserDepositsResponseFromJSONTyped(json, false);
}

export function UserDepositsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserDepositsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(LendingpoolDepositFromJSON)),
    };
}

export function UserDepositsResponseToJSON(json: any): UserDepositsResponse {
    return UserDepositsResponseToJSONTyped(json, false);
}

export function UserDepositsResponseToJSONTyped(value?: UserDepositsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(LendingpoolDepositToJSON)),
    };
}
