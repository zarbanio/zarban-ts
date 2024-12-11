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
 * @interface StablecoinSystemZarexitTxRequest
 */
export interface StablecoinSystemZarexitTxRequest {
    /**
     * Ethereum address of the user intends to exit zar tokens from the Vat contract and receive them..
     * @type {string}
     * @memberof StablecoinSystemZarexitTxRequest
     */
    user: string;
    /**
     * The amount of Zar token to exit from Vat contract
     * @type {string}
     * @memberof StablecoinSystemZarexitTxRequest
     */
    amount: string;
}

/**
 * Check if a given object implements the StablecoinSystemZarexitTxRequest interface.
 */
export function instanceOfStablecoinSystemZarexitTxRequest(value: object): value is StablecoinSystemZarexitTxRequest {
    if (!('user' in value) || value['user'] === undefined) return false;
    if (!('amount' in value) || value['amount'] === undefined) return false;
    return true;
}

export function StablecoinSystemZarexitTxRequestFromJSON(json: any): StablecoinSystemZarexitTxRequest {
    return StablecoinSystemZarexitTxRequestFromJSONTyped(json, false);
}

export function StablecoinSystemZarexitTxRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): StablecoinSystemZarexitTxRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'user': json['user'],
        'amount': json['amount'],
    };
}

export function StablecoinSystemZarexitTxRequestToJSON(json: any): StablecoinSystemZarexitTxRequest {
    return StablecoinSystemZarexitTxRequestToJSONTyped(json, false);
}

export function StablecoinSystemZarexitTxRequestToJSONTyped(value?: StablecoinSystemZarexitTxRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'user': value['user'],
        'amount': value['amount'],
    };
}

