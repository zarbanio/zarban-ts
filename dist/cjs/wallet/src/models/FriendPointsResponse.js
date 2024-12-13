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
exports.instanceOfFriendPointsResponse = instanceOfFriendPointsResponse;
exports.FriendPointsResponseFromJSON = FriendPointsResponseFromJSON;
exports.FriendPointsResponseFromJSONTyped = FriendPointsResponseFromJSONTyped;
exports.FriendPointsResponseToJSON = FriendPointsResponseToJSON;
exports.FriendPointsResponseToJSONTyped = FriendPointsResponseToJSONTyped;
const FriendPoints_1 = require("./FriendPoints");
/**
 * Check if a given object implements the FriendPointsResponse interface.
 */
function instanceOfFriendPointsResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function FriendPointsResponseFromJSON(json) {
    return FriendPointsResponseFromJSONTyped(json, false);
}
function FriendPointsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (json['data'].map(FriendPoints_1.FriendPointsFromJSON)),
    };
}
function FriendPointsResponseToJSON(json) {
    return FriendPointsResponseToJSONTyped(json, false);
}
function FriendPointsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (value['data'].map(FriendPoints_1.FriendPointsToJSON)),
    };
}
//# sourceMappingURL=FriendPointsResponse.js.map