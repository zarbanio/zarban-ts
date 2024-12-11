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
import type { Address } from './Address';
import {
    AddressFromJSON,
    AddressFromJSONTyped,
    AddressToJSON,
    AddressToJSONTyped,
} from './Address';

/**
 * 
 * @export
 * @interface AddressResponse
 */
export interface AddressResponse {
    /**
     * 
     * @type {Array<Address>}
     * @memberof AddressResponse
     */
    data: Array<Address>;
}

/**
 * Check if a given object implements the AddressResponse interface.
 */
export function instanceOfAddressResponse(value: object): value is AddressResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function AddressResponseFromJSON(json: any): AddressResponse {
    return AddressResponseFromJSONTyped(json, false);
}

export function AddressResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(AddressFromJSON)),
    };
}

export function AddressResponseToJSON(json: any): AddressResponse {
    return AddressResponseToJSONTyped(json, false);
}

export function AddressResponseToJSONTyped(value?: AddressResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(AddressToJSON)),
    };
}

