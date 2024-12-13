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
exports.instanceOfLendingpoolStats = instanceOfLendingpoolStats;
exports.LendingpoolStatsFromJSON = LendingpoolStatsFromJSON;
exports.LendingpoolStatsFromJSONTyped = LendingpoolStatsFromJSONTyped;
exports.LendingpoolStatsToJSON = LendingpoolStatsToJSON;
exports.LendingpoolStatsToJSONTyped = LendingpoolStatsToJSONTyped;
/**
 * Check if a given object implements the LendingpoolStats interface.
 */
function instanceOfLendingpoolStats(value) {
    if (!('totalAvailable' in value) || value['totalAvailable'] === undefined)
        return false;
    if (!('totalBorrows' in value) || value['totalBorrows'] === undefined)
        return false;
    if (!('totalMarketSize' in value) || value['totalMarketSize'] === undefined)
        return false;
    return true;
}
function LendingpoolStatsFromJSON(json) {
    return LendingpoolStatsFromJSONTyped(json, false);
}
function LendingpoolStatsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'totalAvailable': json['totalAvailable'],
        'totalBorrows': json['totalBorrows'],
        'totalMarketSize': json['totalMarketSize'],
    };
}
function LendingpoolStatsToJSON(json) {
    return LendingpoolStatsToJSONTyped(json, false);
}
function LendingpoolStatsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'totalAvailable': value['totalAvailable'],
        'totalBorrows': value['totalBorrows'],
        'totalMarketSize': value['totalMarketSize'],
    };
}
//# sourceMappingURL=LendingpoolStats.js.map