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
 * @interface RawDutchAmount
 */
export interface RawDutchAmount {
    /**
     * 
     * @type {string}
     * @memberof RawDutchAmount
     */
    token: string;
    /**
     * 
     * @type {string}
     * @memberof RawDutchAmount
     */
    startAmount: string;
    /**
     * 
     * @type {string}
     * @memberof RawDutchAmount
     */
    endAmount: string;
    /**
     * 
     * @type {string}
     * @memberof RawDutchAmount
     */
    recipient?: string;
}

/**
 * Check if a given object implements the RawDutchAmount interface.
 */
export function instanceOfRawDutchAmount(value: object): value is RawDutchAmount {
    if (!('token' in value) || value['token'] === undefined) return false;
    if (!('startAmount' in value) || value['startAmount'] === undefined) return false;
    if (!('endAmount' in value) || value['endAmount'] === undefined) return false;
    return true;
}

export function RawDutchAmountFromJSON(json: any): RawDutchAmount {
    return RawDutchAmountFromJSONTyped(json, false);
}

export function RawDutchAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawDutchAmount {
    if (json == null) {
        return json;
    }
    return {
        
        'token': json['token'],
        'startAmount': json['startAmount'],
        'endAmount': json['endAmount'],
        'recipient': json['recipient'] == null ? undefined : json['recipient'],
    };
}

export function RawDutchAmountToJSON(json: any): RawDutchAmount {
    return RawDutchAmountToJSONTyped(json, false);
}

export function RawDutchAmountToJSONTyped(value?: RawDutchAmount | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'token': value['token'],
        'startAmount': value['startAmount'],
        'endAmount': value['endAmount'],
        'recipient': value['recipient'],
    };
}
