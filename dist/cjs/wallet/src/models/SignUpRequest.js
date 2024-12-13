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
exports.instanceOfSignUpRequest = instanceOfSignUpRequest;
exports.SignUpRequestFromJSON = SignUpRequestFromJSON;
exports.SignUpRequestFromJSONTyped = SignUpRequestFromJSONTyped;
exports.SignUpRequestToJSON = SignUpRequestToJSON;
exports.SignUpRequestToJSONTyped = SignUpRequestToJSONTyped;
/**
 * Check if a given object implements the SignUpRequest interface.
 */
function instanceOfSignUpRequest(value) {
    if (!('email' in value) || value['email'] === undefined)
        return false;
    if (!('password' in value) || value['password'] === undefined)
        return false;
    return true;
}
function SignUpRequestFromJSON(json) {
    return SignUpRequestFromJSONTyped(json, false);
}
function SignUpRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'email': json['email'],
        'password': json['password'],
    };
}
function SignUpRequestToJSON(json) {
    return SignUpRequestToJSONTyped(json, false);
}
function SignUpRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'email': value['email'],
        'password': value['password'],
    };
}
//# sourceMappingURL=SignUpRequest.js.map