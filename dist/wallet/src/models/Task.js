"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfTask = instanceOfTask;
exports.TaskFromJSON = TaskFromJSON;
exports.TaskFromJSONTyped = TaskFromJSONTyped;
exports.TaskToJSON = TaskToJSON;
exports.TaskToJSONTyped = TaskToJSONTyped;
const Timestamp_1 = require("./Timestamp");
/**
 * Check if a given object implements the Task interface.
 */
function instanceOfTask(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('description' in value) || value['description'] === undefined)
        return false;
    if (!('points' in value) || value['points'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    return true;
}
function TaskFromJSON(json) {
    return TaskFromJSONTyped(json, false);
}
function TaskFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'description': json['description'],
        'points': json['points'],
        'status': json['status'],
        'completedAt': json['completedAt'] == null ? undefined : (0, Timestamp_1.TimestampFromJSON)(json['completedAt']),
    };
}
function TaskToJSON(json) {
    return TaskToJSONTyped(json, false);
}
function TaskToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'description': value['description'],
        'points': value['points'],
        'status': value['status'],
        'completedAt': (0, Timestamp_1.TimestampToJSON)(value['completedAt']),
    };
}
//# sourceMappingURL=Task.js.map