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
 * @interface TelegramProfile
 */
export interface TelegramProfile {
    /**
     * 
     * @type {string}
     * @memberof TelegramProfile
     */
    username?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TelegramProfile
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof TelegramProfile
     */
    lastName?: string | null;
    /**
     * 
     * @type {string}
     * @memberof TelegramProfile
     */
    photoUrl?: string | null;
}

/**
 * Check if a given object implements the TelegramProfile interface.
 */
export function instanceOfTelegramProfile(value: object): value is TelegramProfile {
    if (!('firstName' in value) || value['firstName'] === undefined) return false;
    return true;
}

export function TelegramProfileFromJSON(json: any): TelegramProfile {
    return TelegramProfileFromJSONTyped(json, false);
}

export function TelegramProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelegramProfile {
    if (json == null) {
        return json;
    }
    return {
        
        'username': json['username'] == null ? undefined : json['username'],
        'firstName': json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'photoUrl': json['photoUrl'] == null ? undefined : json['photoUrl'],
    };
}

export function TelegramProfileToJSON(json: any): TelegramProfile {
    return TelegramProfileToJSONTyped(json, false);
}

export function TelegramProfileToJSONTyped(value?: TelegramProfile | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'username': value['username'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'photoUrl': value['photoUrl'],
    };
}
