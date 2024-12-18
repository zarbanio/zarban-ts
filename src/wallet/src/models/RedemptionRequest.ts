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
/**
 * 
 * @export
 * @interface RedemptionRequest
 */
export interface RedemptionRequest {
    /**
     * The amount to be redeemed in ZAR
     * @type {string}
     * @memberof RedemptionRequest
     */
    amount: string;
    /**
     * The card number to which the redemption amount will be transferred
     * @type {string}
     * @memberof RedemptionRequest
     */
    destinationCardNumber: string;
    /**
     * The SMS OTP code
     * @type {number}
     * @memberof RedemptionRequest
     */
    smsOtp: number;
}

/**
 * Check if a given object implements the RedemptionRequest interface.
 */
export function instanceOfRedemptionRequest(value: object): value is RedemptionRequest {
    if (!('amount' in value) || value['amount'] === undefined) return false;
    if (!('destinationCardNumber' in value) || value['destinationCardNumber'] === undefined) return false;
    if (!('smsOtp' in value) || value['smsOtp'] === undefined) return false;
    return true;
}

export function RedemptionRequestFromJSON(json: any): RedemptionRequest {
    return RedemptionRequestFromJSONTyped(json, false);
}

export function RedemptionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RedemptionRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'amount': json['amount'],
        'destinationCardNumber': json['destinationCardNumber'],
        'smsOtp': json['SmsOtp'],
    };
}

export function RedemptionRequestToJSON(json: any): RedemptionRequest {
    return RedemptionRequestToJSONTyped(json, false);
}

export function RedemptionRequestToJSONTyped(value?: RedemptionRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'amount': value['amount'],
        'destinationCardNumber': value['destinationCardNumber'],
        'SmsOtp': value['smsOtp'],
    };
}

