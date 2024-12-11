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
 * @interface KycConfirmRequest
 */
export interface KycConfirmRequest {
    /**
     * KYC request ID
     * @type {string}
     * @memberof KycConfirmRequest
     */
    id: string;
}

/**
 * Check if a given object implements the KycConfirmRequest interface.
 */
export function instanceOfKycConfirmRequest(value: object): value is KycConfirmRequest {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function KycConfirmRequestFromJSON(json: any): KycConfirmRequest {
    return KycConfirmRequestFromJSONTyped(json, false);
}

export function KycConfirmRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): KycConfirmRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
    };
}

export function KycConfirmRequestToJSON(json: any): KycConfirmRequest {
    return KycConfirmRequestToJSONTyped(json, false);
}

export function KycConfirmRequestToJSONTyped(value?: KycConfirmRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
    };
}

