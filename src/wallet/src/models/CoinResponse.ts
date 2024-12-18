/* tslint:disable */
/* eslint-disable */
/**
 * Zarban Wallet API
 * API for Zarban wallet services.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@zarban.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { Coin } from './Coin';
import {
    CoinFromJSON,
    CoinFromJSONTyped,
    CoinToJSON,
    CoinToJSONTyped,
} from './Coin';

/**
 * 
 * @export
 * @interface CoinResponse
 */
export interface CoinResponse {
    /**
     * 
     * @type {Array<Coin>}
     * @memberof CoinResponse
     */
    data: Array<Coin>;
}

/**
 * Check if a given object implements the CoinResponse interface.
 */
export function instanceOfCoinResponse(value: object): value is CoinResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function CoinResponseFromJSON(json: any): CoinResponse {
    return CoinResponseFromJSONTyped(json, false);
}

export function CoinResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CoinResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(CoinFromJSON)),
    };
}

export function CoinResponseToJSON(json: any): CoinResponse {
    return CoinResponseToJSONTyped(json, false);
}

export function CoinResponseToJSONTyped(value?: CoinResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(CoinToJSON)),
    };
}

