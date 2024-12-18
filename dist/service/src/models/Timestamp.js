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
exports.instanceOfTimestamp = instanceOfTimestamp;
exports.TimestampFromJSON = TimestampFromJSON;
exports.TimestampFromJSONTyped = TimestampFromJSONTyped;
exports.TimestampToJSON = TimestampToJSON;
exports.TimestampToJSONTyped = TimestampToJSONTyped;
/**
 * Check if a given object implements the Timestamp interface.
 */
function instanceOfTimestamp(value) {
    if (!('jalaali' in value) || value['jalaali'] === undefined)
        return false;
    if (!('gregorian' in value) || value['gregorian'] === undefined)
        return false;
    return true;
}
function TimestampFromJSON(json) {
    return TimestampFromJSONTyped(json, false);
}
function TimestampFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'jalaali': json['jalaali'],
        'gregorian': json['gregorian'],
    };
}
function TimestampToJSON(json) {
    return TimestampToJSONTyped(json, false);
}
function TimestampToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'jalaali': value['jalaali'],
        'gregorian': value['gregorian'],
    };
}
//# sourceMappingURL=Timestamp.js.map