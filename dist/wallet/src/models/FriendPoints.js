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
exports.instanceOfFriendPoints = instanceOfFriendPoints;
exports.FriendPointsFromJSON = FriendPointsFromJSON;
exports.FriendPointsFromJSONTyped = FriendPointsFromJSONTyped;
exports.FriendPointsToJSON = FriendPointsToJSON;
exports.FriendPointsToJSONTyped = FriendPointsToJSONTyped;
/**
 * Check if a given object implements the FriendPoints interface.
 */
function instanceOfFriendPoints(value) {
    if (!('firstName' in value) || value['firstName'] === undefined)
        return false;
    if (!('points' in value) || value['points'] === undefined)
        return false;
    return true;
}
function FriendPointsFromJSON(json) {
    return FriendPointsFromJSONTyped(json, false);
}
function FriendPointsFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'firstName': json['firstName'],
        'points': json['points'],
    };
}
function FriendPointsToJSON(json) {
    return FriendPointsToJSONTyped(json, false);
}
function FriendPointsToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'firstName': value['firstName'],
        'points': value['points'],
    };
}
//# sourceMappingURL=FriendPoints.js.map