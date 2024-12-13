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
 * @interface TypedDataDomain
 */
export interface TypedDataDomain {
    /**
     * 
     * @type {string}
     * @memberof TypedDataDomain
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TypedDataDomain
     */
    version?: string;
    /**
     * 
     * @type {string}
     * @memberof TypedDataDomain
     */
    chainId: string;
    /**
     * 
     * @type {string}
     * @memberof TypedDataDomain
     */
    verifyingContract: string;
    /**
     * 
     * @type {string}
     * @memberof TypedDataDomain
     */
    salt?: string;
}

/**
 * Check if a given object implements the TypedDataDomain interface.
 */
export function instanceOfTypedDataDomain(value: object): value is TypedDataDomain {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('chainId' in value) || value['chainId'] === undefined) return false;
    if (!('verifyingContract' in value) || value['verifyingContract'] === undefined) return false;
    return true;
}

export function TypedDataDomainFromJSON(json: any): TypedDataDomain {
    return TypedDataDomainFromJSONTyped(json, false);
}

export function TypedDataDomainFromJSONTyped(json: any, ignoreDiscriminator: boolean): TypedDataDomain {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'version': json['version'] == null ? undefined : json['version'],
        'chainId': json['chainId'],
        'verifyingContract': json['verifyingContract'],
        'salt': json['salt'] == null ? undefined : json['salt'],
    };
}

export function TypedDataDomainToJSON(json: any): TypedDataDomain {
    return TypedDataDomainToJSONTyped(json, false);
}

export function TypedDataDomainToJSONTyped(value?: TypedDataDomain | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'version': value['version'],
        'chainId': value['chainId'],
        'verifyingContract': value['verifyingContract'],
        'salt': value['salt'],
    };
}
