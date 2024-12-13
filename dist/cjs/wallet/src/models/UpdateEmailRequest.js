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
exports.instanceOfUpdateEmailRequest = instanceOfUpdateEmailRequest;
exports.UpdateEmailRequestFromJSON = UpdateEmailRequestFromJSON;
exports.UpdateEmailRequestFromJSONTyped = UpdateEmailRequestFromJSONTyped;
exports.UpdateEmailRequestToJSON = UpdateEmailRequestToJSON;
exports.UpdateEmailRequestToJSONTyped = UpdateEmailRequestToJSONTyped;
/**
 * Check if a given object implements the UpdateEmailRequest interface.
 */
function instanceOfUpdateEmailRequest(value) {
    if (!('email' in value) || value['email'] === undefined)
        return false;
    return true;
}
function UpdateEmailRequestFromJSON(json) {
    return UpdateEmailRequestFromJSONTyped(json, false);
}
function UpdateEmailRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'email': json['email'],
    };
}
function UpdateEmailRequestToJSON(json) {
    return UpdateEmailRequestToJSONTyped(json, false);
}
function UpdateEmailRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'email': value['email'],
    };
}
//# sourceMappingURL=UpdateEmailRequest.js.map