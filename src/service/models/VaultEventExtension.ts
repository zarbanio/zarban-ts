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
import type { VaultEvent } from './VaultEvent';
import {
    VaultEventFromJSON,
    VaultEventFromJSONTyped,
    VaultEventToJSON,
    VaultEventToJSONTyped,
} from './VaultEvent';

/**
 * 
 * @export
 * @interface VaultEventExtension
 */
export interface VaultEventExtension {
    /**
     * 
     * @type {VaultEvent}
     * @memberof VaultEventExtension
     */
    payload?: VaultEvent;
}

/**
 * Check if a given object implements the VaultEventExtension interface.
 */
export function instanceOfVaultEventExtension(value: object): value is VaultEventExtension {
    return true;
}

export function VaultEventExtensionFromJSON(json: any): VaultEventExtension {
    return VaultEventExtensionFromJSONTyped(json, false);
}

export function VaultEventExtensionFromJSONTyped(json: any, ignoreDiscriminator: boolean): VaultEventExtension {
    if (json == null) {
        return json;
    }
    return {
        
        'payload': json['payload'] == null ? undefined : VaultEventFromJSON(json['payload']),
    };
}

export function VaultEventExtensionToJSON(json: any): VaultEventExtension {
    return VaultEventExtensionToJSONTyped(json, false);
}

export function VaultEventExtensionToJSONTyped(value?: VaultEventExtension | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'payload': VaultEventToJSON(value['payload']),
    };
}
