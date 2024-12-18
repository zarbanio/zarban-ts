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
 * @interface LendingpoolTxResponse
 */
export interface LendingpoolTxResponse {
    /**
     * The health factor after the deposit
     * @type {string}
     * @memberof LendingpoolTxResponse
     */
    nextHealthFactor?: string;
}

/**
 * Check if a given object implements the LendingpoolTxResponse interface.
 */
export function instanceOfLendingpoolTxResponse(value: object): value is LendingpoolTxResponse {
    return true;
}

export function LendingpoolTxResponseFromJSON(json: any): LendingpoolTxResponse {
    return LendingpoolTxResponseFromJSONTyped(json, false);
}

export function LendingpoolTxResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LendingpoolTxResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'nextHealthFactor': json['nextHealthFactor'] == null ? undefined : json['nextHealthFactor'],
    };
}

export function LendingpoolTxResponseToJSON(json: any): LendingpoolTxResponse {
    return LendingpoolTxResponseToJSONTyped(json, false);
}

export function LendingpoolTxResponseToJSONTyped(value?: LendingpoolTxResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'nextHealthFactor': value['nextHealthFactor'],
    };
}

