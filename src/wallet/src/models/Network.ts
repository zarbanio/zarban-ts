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
 * @interface Network
 */
export interface Network {
    /**
     * 
     * @type {{ [key: string]: string | undefined; }}
     * @memberof Network
     */
    name: { [key: string]: string | undefined; };
    /**
     * 
     * @type {string}
     * @memberof Network
     */
    logoUri: string;
}

/**
 * Check if a given object implements the Network interface.
 */
export function instanceOfNetwork(value: object): value is Network {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('logoUri' in value) || value['logoUri'] === undefined) return false;
    return true;
}

export function NetworkFromJSON(json: any): Network {
    return NetworkFromJSONTyped(json, false);
}

export function NetworkFromJSONTyped(json: any, ignoreDiscriminator: boolean): Network {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'logoUri': json['logoUri'],
    };
}

export function NetworkToJSON(json: any): Network {
    return NetworkToJSONTyped(json, false);
}

export function NetworkToJSONTyped(value?: Network | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'name': value['name'],
        'logoUri': value['logoUri'],
    };
}

