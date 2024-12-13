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
 * @interface UpdateEmailRequest
 */
export interface UpdateEmailRequest {
    /**
     * Email address
     * @type {string}
     * @memberof UpdateEmailRequest
     */
    email: string;
}

/**
 * Check if a given object implements the UpdateEmailRequest interface.
 */
export function instanceOfUpdateEmailRequest(value: object): value is UpdateEmailRequest {
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function UpdateEmailRequestFromJSON(json: any): UpdateEmailRequest {
    return UpdateEmailRequestFromJSONTyped(json, false);
}

export function UpdateEmailRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): UpdateEmailRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
    };
}

export function UpdateEmailRequestToJSON(json: any): UpdateEmailRequest {
    return UpdateEmailRequestToJSONTyped(json, false);
}

export function UpdateEmailRequestToJSONTyped(value?: UpdateEmailRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'email': value['email'],
    };
}

