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
exports.instanceOfUserStake = instanceOfUserStake;
exports.UserStakeFromJSON = UserStakeFromJSON;
exports.UserStakeFromJSONTyped = UserStakeFromJSONTyped;
exports.UserStakeToJSON = UserStakeToJSON;
exports.UserStakeToJSONTyped = UserStakeToJSONTyped;
/**
 * Check if a given object implements the UserStake interface.
 */
function instanceOfUserStake(value) {
    if (!('user' in value) || value['user'] === undefined)
        return false;
    if (!('balance' in value) || value['balance'] === undefined)
        return false;
    if (!('unclaimedReward' in value) || value['unclaimedReward'] === undefined)
        return false;
    if (!('contractAddress' in value) || value['contractAddress'] === undefined)
        return false;
    if (!('planName' in value) || value['planName'] === undefined)
        return false;
    return true;
}
function UserStakeFromJSON(json) {
    return UserStakeFromJSONTyped(json, false);
}
function UserStakeFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'user': json['user'],
        'balance': json['balance'],
        'unclaimedReward': json['unclaimedReward'],
        'contractAddress': json['contractAddress'],
        'planName': json['planName'],
    };
}
function UserStakeToJSON(json) {
    return UserStakeToJSONTyped(json, false);
}
function UserStakeToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'user': value['user'],
        'balance': value['balance'],
        'unclaimedReward': value['unclaimedReward'],
        'contractAddress': value['contractAddress'],
        'planName': value['planName'],
    };
}
//# sourceMappingURL=UserStake.js.map