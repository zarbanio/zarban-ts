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
 * System debt ceiling
 * @export
 * @interface SystemDebtCeiling
 */
export interface SystemDebtCeiling {
}

/**
 * Check if a given object implements the SystemDebtCeiling interface.
 */
export function instanceOfSystemDebtCeiling(value: object): value is SystemDebtCeiling {
    return true;
}

export function SystemDebtCeilingFromJSON(json: any): SystemDebtCeiling {
    return SystemDebtCeilingFromJSONTyped(json, false);
}

export function SystemDebtCeilingFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemDebtCeiling {
    return json;
}

export function SystemDebtCeilingToJSON(json: any): SystemDebtCeiling {
    return SystemDebtCeilingToJSONTyped(json, false);
}

export function SystemDebtCeilingToJSONTyped(value?: SystemDebtCeiling | null, ignoreDiscriminator: boolean = false): any {
    return value;
}
