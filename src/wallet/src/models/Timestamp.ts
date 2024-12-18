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
 * @interface Timestamp
 */
export interface Timestamp {
    /**
     * Jalaali date
     * @type {string}
     * @memberof Timestamp
     */
    jalaali: string;
    /**
     * Gregorian date
     * @type {string}
     * @memberof Timestamp
     */
    gregorian: string;
}

/**
 * Check if a given object implements the Timestamp interface.
 */
export function instanceOfTimestamp(value: object): value is Timestamp {
    if (!('jalaali' in value) || value['jalaali'] === undefined) return false;
    if (!('gregorian' in value) || value['gregorian'] === undefined) return false;
    return true;
}

export function TimestampFromJSON(json: any): Timestamp {
    return TimestampFromJSONTyped(json, false);
}

export function TimestampFromJSONTyped(json: any, ignoreDiscriminator: boolean): Timestamp {
    if (json == null) {
        return json;
    }
    return {
        
        'jalaali': json['jalaali'],
        'gregorian': json['gregorian'],
    };
}

export function TimestampToJSON(json: any): Timestamp {
    return TimestampToJSONTyped(json, false);
}

export function TimestampToJSONTyped(value?: Timestamp | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'jalaali': value['jalaali'],
        'gregorian': value['gregorian'],
    };
}

