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
exports.instanceOfErrorMessage = instanceOfErrorMessage;
exports.ErrorMessageFromJSON = ErrorMessageFromJSON;
exports.ErrorMessageFromJSONTyped = ErrorMessageFromJSONTyped;
exports.ErrorMessageToJSON = ErrorMessageToJSON;
exports.ErrorMessageToJSONTyped = ErrorMessageToJSONTyped;
/**
 * Check if a given object implements the ErrorMessage interface.
 */
function instanceOfErrorMessage(value) {
    if (!('userMessage' in value) || value['userMessage'] === undefined)
        return false;
    if (!('solutions' in value) || value['solutions'] === undefined)
        return false;
    return true;
}
function ErrorMessageFromJSON(json) {
    return ErrorMessageFromJSONTyped(json, false);
}
function ErrorMessageFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'userMessage': json['userMessage'],
        'solutions': json['solutions'],
    };
}
function ErrorMessageToJSON(json) {
    return ErrorMessageToJSONTyped(json, false);
}
function ErrorMessageToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'userMessage': value['userMessage'],
        'solutions': value['solutions'],
    };
}
//# sourceMappingURL=ErrorMessage.js.map