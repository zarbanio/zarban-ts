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
exports.instanceOfTaskResponse = instanceOfTaskResponse;
exports.TaskResponseFromJSON = TaskResponseFromJSON;
exports.TaskResponseFromJSONTyped = TaskResponseFromJSONTyped;
exports.TaskResponseToJSON = TaskResponseToJSON;
exports.TaskResponseToJSONTyped = TaskResponseToJSONTyped;
const Task_1 = require("./Task");
/**
 * Check if a given object implements the TaskResponse interface.
 */
function instanceOfTaskResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function TaskResponseFromJSON(json) {
    return TaskResponseFromJSONTyped(json, false);
}
function TaskResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (json['data'].map(Task_1.TaskFromJSON)),
    };
}
function TaskResponseToJSON(json) {
    return TaskResponseToJSONTyped(json, false);
}
function TaskResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (value['data'].map(Task_1.TaskToJSON)),
    };
}
//# sourceMappingURL=TaskResponse.js.map