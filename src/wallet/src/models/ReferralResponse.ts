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
import type { Referral } from './Referral';
import {
    ReferralFromJSON,
    ReferralFromJSONTyped,
    ReferralToJSON,
    ReferralToJSONTyped,
} from './Referral';

/**
 * 
 * @export
 * @interface ReferralResponse
 */
export interface ReferralResponse {
    /**
     * 
     * @type {Array<Referral>}
     * @memberof ReferralResponse
     */
    data: Array<Referral>;
}

/**
 * Check if a given object implements the ReferralResponse interface.
 */
export function instanceOfReferralResponse(value: object): value is ReferralResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function ReferralResponseFromJSON(json: any): ReferralResponse {
    return ReferralResponseFromJSONTyped(json, false);
}

export function ReferralResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferralResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(ReferralFromJSON)),
    };
}

export function ReferralResponseToJSON(json: any): ReferralResponse {
    return ReferralResponseToJSONTyped(json, false);
}

export function ReferralResponseToJSONTyped(value?: ReferralResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(ReferralToJSON)),
    };
}

