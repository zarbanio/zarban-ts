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
 * System debt
 * @export
 * @interface SystemDebt
 */
export interface SystemDebt {
}

/**
 * Check if a given object implements the SystemDebt interface.
 */
export function instanceOfSystemDebt(value: object): value is SystemDebt {
    return true;
}

export function SystemDebtFromJSON(json: any): SystemDebt {
    return SystemDebtFromJSONTyped(json, false);
}

export function SystemDebtFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemDebt {
    return json;
}

export function SystemDebtToJSON(json: any): SystemDebt {
    return SystemDebtToJSONTyped(json, false);
}

export function SystemDebtToJSONTyped(value?: SystemDebt | null, ignoreDiscriminator: boolean = false): any {
    return value;
}

