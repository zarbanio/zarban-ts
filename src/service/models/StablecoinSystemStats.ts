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
 * @interface StablecoinSystemStats
 */
export interface StablecoinSystemStats {
    /**
     * System surplus
     * @type {{ [key: string]: string; }}
     * @memberof StablecoinSystemStats
     */
    systemSurplus: { [key: string]: string; };
    /**
     * System debt
     * @type {{ [key: string]: string; }}
     * @memberof StablecoinSystemStats
     */
    systemDebt: { [key: string]: string; };
    /**
     * System debt ceiling
     * @type {{ [key: string]: string; }}
     * @memberof StablecoinSystemStats
     */
    systemDebtCeiling: { [key: string]: string; };
    /**
     * System surplus buffer
     * @type {{ [key: string]: string; }}
     * @memberof StablecoinSystemStats
     */
    systemSurplusBuffer: { [key: string]: string; };
    /**
     * System bad debt
     * @type {{ [key: string]: string; }}
     * @memberof StablecoinSystemStats
     */
    systemBadDebt: { [key: string]: string; };
    /**
     * System surplus lot size
     * @type {{ [key: string]: string; }}
     * @memberof StablecoinSystemStats
     */
    systemSurplusLotSize: { [key: string]: string; };
}

/**
 * Check if a given object implements the StablecoinSystemStats interface.
 */
export function instanceOfStablecoinSystemStats(value: object): value is StablecoinSystemStats {
    if (!('systemSurplus' in value) || value['systemSurplus'] === undefined) return false;
    if (!('systemDebt' in value) || value['systemDebt'] === undefined) return false;
    if (!('systemDebtCeiling' in value) || value['systemDebtCeiling'] === undefined) return false;
    if (!('systemSurplusBuffer' in value) || value['systemSurplusBuffer'] === undefined) return false;
    if (!('systemBadDebt' in value) || value['systemBadDebt'] === undefined) return false;
    if (!('systemSurplusLotSize' in value) || value['systemSurplusLotSize'] === undefined) return false;
    return true;
}

export function StablecoinSystemStatsFromJSON(json: any): StablecoinSystemStats {
    return StablecoinSystemStatsFromJSONTyped(json, false);
}

export function StablecoinSystemStatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): StablecoinSystemStats {
    if (json == null) {
        return json;
    }
    return {
        
        'systemSurplus': json['systemSurplus'],
        'systemDebt': json['systemDebt'],
        'systemDebtCeiling': json['systemDebtCeiling'],
        'systemSurplusBuffer': json['systemSurplusBuffer'],
        'systemBadDebt': json['systemBadDebt'],
        'systemSurplusLotSize': json['systemSurplusLotSize'],
    };
}

export function StablecoinSystemStatsToJSON(json: any): StablecoinSystemStats {
    return StablecoinSystemStatsToJSONTyped(json, false);
}

export function StablecoinSystemStatsToJSONTyped(value?: StablecoinSystemStats | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'systemSurplus': value['systemSurplus'],
        'systemDebt': value['systemDebt'],
        'systemDebtCeiling': value['systemDebtCeiling'],
        'systemSurplusBuffer': value['systemSurplusBuffer'],
        'systemBadDebt': value['systemBadDebt'],
        'systemSurplusLotSize': value['systemSurplusLotSize'],
    };
}
