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
exports.instanceOfHealthStatus = instanceOfHealthStatus;
exports.HealthStatusFromJSON = HealthStatusFromJSON;
exports.HealthStatusFromJSONTyped = HealthStatusFromJSONTyped;
exports.HealthStatusToJSON = HealthStatusToJSON;
exports.HealthStatusToJSONTyped = HealthStatusToJSONTyped;
/**
 * Check if a given object implements the HealthStatus interface.
 */
function instanceOfHealthStatus(value) {
    return true;
}
function HealthStatusFromJSON(json) {
    return HealthStatusFromJSONTyped(json, false);
}
function HealthStatusFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'status': json['status'] == null ? undefined : json['status'],
    };
}
function HealthStatusToJSON(json) {
    return HealthStatusToJSONTyped(json, false);
}
function HealthStatusToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'status': value['status'],
    };
}
//# sourceMappingURL=HealthStatus.js.map