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
exports.instanceOfTelegramProfile = instanceOfTelegramProfile;
exports.TelegramProfileFromJSON = TelegramProfileFromJSON;
exports.TelegramProfileFromJSONTyped = TelegramProfileFromJSONTyped;
exports.TelegramProfileToJSON = TelegramProfileToJSON;
exports.TelegramProfileToJSONTyped = TelegramProfileToJSONTyped;
/**
 * Check if a given object implements the TelegramProfile interface.
 */
function instanceOfTelegramProfile(value) {
    if (!('firstName' in value) || value['firstName'] === undefined)
        return false;
    return true;
}
function TelegramProfileFromJSON(json) {
    return TelegramProfileFromJSONTyped(json, false);
}
function TelegramProfileFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'username': json['username'] == null ? undefined : json['username'],
        'firstName': json['firstName'],
        'lastName': json['lastName'] == null ? undefined : json['lastName'],
        'photoUrl': json['photoUrl'] == null ? undefined : json['photoUrl'],
    };
}
function TelegramProfileToJSON(json) {
    return TelegramProfileToJSONTyped(json, false);
}
function TelegramProfileToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'username': value['username'],
        'firstName': value['firstName'],
        'lastName': value['lastName'],
        'photoUrl': value['photoUrl'],
    };
}
//# sourceMappingURL=TelegramProfile.js.map