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
exports.instanceOfUserStakesResponse = instanceOfUserStakesResponse;
exports.UserStakesResponseFromJSON = UserStakesResponseFromJSON;
exports.UserStakesResponseFromJSONTyped = UserStakesResponseFromJSONTyped;
exports.UserStakesResponseToJSON = UserStakesResponseToJSON;
exports.UserStakesResponseToJSONTyped = UserStakesResponseToJSONTyped;
const UserStake_1 = require("./UserStake");
/**
 * Check if a given object implements the UserStakesResponse interface.
 */
function instanceOfUserStakesResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function UserStakesResponseFromJSON(json) {
    return UserStakesResponseFromJSONTyped(json, false);
}
function UserStakesResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (json['data'].map(UserStake_1.UserStakeFromJSON)),
    };
}
function UserStakesResponseToJSON(json) {
    return UserStakesResponseToJSONTyped(json, false);
}
function UserStakesResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (value['data'].map(UserStake_1.UserStakeToJSON)),
    };
}
//# sourceMappingURL=UserStakesResponse.js.map