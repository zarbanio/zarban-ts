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
exports.instanceOfStats = instanceOfStats;
exports.StatsFromJSON = StatsFromJSON;
exports.StatsFromJSONTyped = StatsFromJSONTyped;
exports.StatsToJSON = StatsToJSON;
exports.StatsToJSONTyped = StatsToJSONTyped;
const LendingpoolStats_1 = require("./LendingpoolStats");
const StablecoinSystemStats_1 = require("./StablecoinSystemStats");
/**
 * Check if a given object implements the Stats interface.
 */
function instanceOfStats(value) {
    if (!('stablecoinSystem' in value) || value['stablecoinSystem'] === undefined)
        return false;
    if (!('lendingpool' in value) || value['lendingpool'] === undefined)
        return false;
    return true;
}
function StatsFromJSON(json) {
    return StatsFromJSONTyped(json, false);
}
function StatsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'stablecoinSystem': (0, StablecoinSystemStats_1.StablecoinSystemStatsFromJSON)(json['stablecoinSystem']),
        'lendingpool': (0, LendingpoolStats_1.LendingpoolStatsFromJSON)(json['lendingpool']),
    };
}
function StatsToJSON(json) {
    return StatsToJSONTyped(json, false);
}
function StatsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'stablecoinSystem': (0, StablecoinSystemStats_1.StablecoinSystemStatsToJSON)(value['stablecoinSystem']),
        'lendingpool': (0, LendingpoolStats_1.LendingpoolStatsToJSON)(value['lendingpool']),
    };
}
//# sourceMappingURL=Stats.js.map