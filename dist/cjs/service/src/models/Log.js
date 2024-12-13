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
exports.instanceOfLog = instanceOfLog;
exports.LogFromJSON = LogFromJSON;
exports.LogFromJSONTyped = LogFromJSONTyped;
exports.LogToJSON = LogToJSON;
exports.LogToJSONTyped = LogToJSONTyped;
const Timestamp_1 = require("./Timestamp");
/**
 * Check if a given object implements the Log interface.
 */
function instanceOfLog(value) {
    if (!('name' in value) || value['name'] === undefined)
        return false;
    if (!('contract' in value) || value['contract'] === undefined)
        return false;
    if (!('timestamp' in value) || value['timestamp'] === undefined)
        return false;
    if (!('address' in value) || value['address'] === undefined)
        return false;
    if (!('blockNumber' in value) || value['blockNumber'] === undefined)
        return false;
    if (!('txHash' in value) || value['txHash'] === undefined)
        return false;
    if (!('blockHash' in value) || value['blockHash'] === undefined)
        return false;
    if (!('index' in value) || value['index'] === undefined)
        return false;
    if (!('topics' in value) || value['topics'] === undefined)
        return false;
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function LogFromJSON(json) {
    return LogFromJSONTyped(json, false);
}
function LogFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'name': json['name'],
        'contract': json['contract'],
        'timestamp': (0, Timestamp_1.TimestampFromJSON)(json['timestamp']),
        'address': json['address'],
        'blockNumber': json['blockNumber'],
        'txHash': json['txHash'],
        'blockHash': json['blockHash'],
        'index': json['index'],
        'topics': json['topics'],
        'data': json['data'],
        'decoded': json['decoded'] == null ? undefined : json['decoded'],
    };
}
function LogToJSON(json) {
    return LogToJSONTyped(json, false);
}
function LogToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'name': value['name'],
        'contract': value['contract'],
        'timestamp': (0, Timestamp_1.TimestampToJSON)(value['timestamp']),
        'address': value['address'],
        'blockNumber': value['blockNumber'],
        'txHash': value['txHash'],
        'blockHash': value['blockHash'],
        'index': value['index'],
        'topics': value['topics'],
        'data': value['data'],
        'decoded': value['decoded'],
    };
}
//# sourceMappingURL=Log.js.map