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
import type { Network } from './Network';
import {
    NetworkFromJSON,
    NetworkFromJSONTyped,
    NetworkToJSON,
    NetworkToJSONTyped,
} from './Network';

/**
 * 
 * @export
 * @interface DepositResponse
 */
export interface DepositResponse {
    /**
     * Deposit address
     * @type {string}
     * @memberof DepositResponse
     */
    address: string;
    /**
     * 
     * @type {Network}
     * @memberof DepositResponse
     */
    network: Network;
    /**
     * Coin symbol
     * @type {string}
     * @memberof DepositResponse
     */
    symbol: string;
}

/**
 * Check if a given object implements the DepositResponse interface.
 */
export function instanceOfDepositResponse(value: object): value is DepositResponse {
    if (!('address' in value) || value['address'] === undefined) return false;
    if (!('network' in value) || value['network'] === undefined) return false;
    if (!('symbol' in value) || value['symbol'] === undefined) return false;
    return true;
}

export function DepositResponseFromJSON(json: any): DepositResponse {
    return DepositResponseFromJSONTyped(json, false);
}

export function DepositResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'address': json['address'],
        'network': NetworkFromJSON(json['network']),
        'symbol': json['symbol'],
    };
}

export function DepositResponseToJSON(json: any): DepositResponse {
    return DepositResponseToJSONTyped(json, false);
}

export function DepositResponseToJSONTyped(value?: DepositResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'address': value['address'],
        'network': NetworkToJSON(value['network']),
        'symbol': value['symbol'],
    };
}

