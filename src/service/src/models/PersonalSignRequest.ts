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
 * @interface PersonalSignRequest
 */
export interface PersonalSignRequest {
    /**
     * The message that needs to be signed
     * @type {string}
     * @memberof PersonalSignRequest
     */
    message: string;
}

/**
 * Check if a given object implements the PersonalSignRequest interface.
 */
export function instanceOfPersonalSignRequest(value: object): value is PersonalSignRequest {
    if (!('message' in value) || value['message'] === undefined) return false;
    return true;
}

export function PersonalSignRequestFromJSON(json: any): PersonalSignRequest {
    return PersonalSignRequestFromJSONTyped(json, false);
}

export function PersonalSignRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PersonalSignRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'message': json['message'],
    };
}

export function PersonalSignRequestToJSON(json: any): PersonalSignRequest {
    return PersonalSignRequestToJSONTyped(json, false);
}

export function PersonalSignRequestToJSONTyped(value?: PersonalSignRequest | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'message': value['message'],
    };
}

