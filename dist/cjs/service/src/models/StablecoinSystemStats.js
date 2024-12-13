"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfStablecoinSystemStats = instanceOfStablecoinSystemStats;
exports.StablecoinSystemStatsFromJSON = StablecoinSystemStatsFromJSON;
exports.StablecoinSystemStatsFromJSONTyped = StablecoinSystemStatsFromJSONTyped;
exports.StablecoinSystemStatsToJSON = StablecoinSystemStatsToJSON;
exports.StablecoinSystemStatsToJSONTyped = StablecoinSystemStatsToJSONTyped;
/**
 * Check if a given object implements the StablecoinSystemStats interface.
 */
function instanceOfStablecoinSystemStats(value) {
    if (!('systemSurplus' in value) || value['systemSurplus'] === undefined)
        return false;
    if (!('systemDebt' in value) || value['systemDebt'] === undefined)
        return false;
    if (!('systemDebtCeiling' in value) || value['systemDebtCeiling'] === undefined)
        return false;
    if (!('systemSurplusBuffer' in value) || value['systemSurplusBuffer'] === undefined)
        return false;
    if (!('systemBadDebt' in value) || value['systemBadDebt'] === undefined)
        return false;
    if (!('systemSurplusLotSize' in value) || value['systemSurplusLotSize'] === undefined)
        return false;
    return true;
}
function StablecoinSystemStatsFromJSON(json) {
    return StablecoinSystemStatsFromJSONTyped(json, false);
}
function StablecoinSystemStatsFromJSONTyped(json, ignoreDiscriminator) {
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
function StablecoinSystemStatsToJSON(json) {
    return StablecoinSystemStatsToJSONTyped(json, false);
}
function StablecoinSystemStatsToJSONTyped(value, ignoreDiscriminator = false) {
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
//# sourceMappingURL=StablecoinSystemStats.js.map