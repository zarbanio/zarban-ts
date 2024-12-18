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
 * @interface StablecoinSystemRepayZarTxRequest
 */
export interface StablecoinSystemRepayZarTxRequest {
    /**
     * Ethereum address of the user
     * @type {string}
     * @memberof StablecoinSystemRepayZarTxRequest
     */
    user: string;
    /**
     * The ID of the vault
     * @type {number}
     * @memberof StablecoinSystemRepayZarTxRequest
     */
    vaultId: number;
    /**
     * The amount of stablecoin to repay in native token units, if not provided, it will be calculated based on the borrow balance
     * @type {string}
     * @memberof StablecoinSystemRepayZarTxRequest
     */
    amount?: string;
}

/**
 * Check if a given object implements the StablecoinSystemRepayZarTxRequest interface.
 */
export function instanceOfStablecoinSystemRepayZarTxRequest(value: object): value is StablecoinSystemRepayZarTxRequest {
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('vaultId' in value) || value['vaultId'] === undefined) return false;
    return true;
}

export function StablecoinSystemRepayZarTxRequestFromJSON(json: any): StablecoinSystemRepayZarTxRequest {
    return StablecoinSystemRepayZarTxRequestFromJSONTyped(json, false);
}

export function StablecoinSystemRepayZarTxRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StablecoinSystemRepayZarTxRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'user': json['user'],
        'vaultId': json['vaultId'],
        'amount': json['amount'] == null ? undefined : json['amount'],
    };
}

export function StablecoinSystemRepayZarTxRequestToJSON(json: any): StablecoinSystemRepayZarTxRequest {
    return StablecoinSystemRepayZarTxRequestToJSONTyped(json, false);
}

export function StablecoinSystemRepayZarTxRequestToJSONTyped(value?: StablecoinSystemRepayZarTxRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user': value['user'],
        'vaultId': value['vaultId'],
        'amount': value['amount'],
    };
}

