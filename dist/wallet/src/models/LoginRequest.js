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
exports.instanceOfLoginRequest = instanceOfLoginRequest;
exports.LoginRequestFromJSON = LoginRequestFromJSON;
exports.LoginRequestFromJSONTyped = LoginRequestFromJSONTyped;
exports.LoginRequestToJSON = LoginRequestToJSON;
exports.LoginRequestToJSONTyped = LoginRequestToJSONTyped;
/**
 * Check if a given object implements the LoginRequest interface.
 */
function instanceOfLoginRequest(value) {
    if (!('email' in value) || value['email'] === undefined)
        return false;
    if (!('password' in value) || value['password'] === undefined)
        return false;
    return true;
}
function LoginRequestFromJSON(json) {
    return LoginRequestFromJSONTyped(json, false);
}
function LoginRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'email': json['email'],
        'password': json['password'],
    };
}
function LoginRequestToJSON(json) {
    return LoginRequestToJSONTyped(json, false);
}
function LoginRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'email': value['email'],
        'password': value['password'],
    };
}
//# sourceMappingURL=LoginRequest.js.map