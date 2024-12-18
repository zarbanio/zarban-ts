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
 * @interface UpdatePhoneRequest
 */
export interface UpdatePhoneRequest {
    /**
     * Phone number
     * @type {string}
     * @memberof UpdatePhoneRequest
     */
    number: string;
}

/**
 * Check if a given object implements the UpdatePhoneRequest interface.
 */
export function instanceOfUpdatePhoneRequest(value: object): value is UpdatePhoneRequest {
    if (!('number' in value) || value['number'] === undefined) return false;
    return true;
}

export function UpdatePhoneRequestFromJSON(json: any): UpdatePhoneRequest {
    return UpdatePhoneRequestFromJSONTyped(json, false);
}

export function UpdatePhoneRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdatePhoneRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'number': json['number'],
    };
}

export function UpdatePhoneRequestToJSON(json: any): UpdatePhoneRequest {
    return UpdatePhoneRequestToJSONTyped(json, false);
}

export function UpdatePhoneRequestToJSONTyped(value?: UpdatePhoneRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'number': value['number'],
    };
}

