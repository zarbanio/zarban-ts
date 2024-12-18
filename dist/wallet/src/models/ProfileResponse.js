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
exports.instanceOfProfileResponse = instanceOfProfileResponse;
exports.ProfileResponseFromJSON = ProfileResponseFromJSON;
exports.ProfileResponseFromJSONTyped = ProfileResponseFromJSONTyped;
exports.ProfileResponseToJSON = ProfileResponseToJSON;
exports.ProfileResponseToJSONTyped = ProfileResponseToJSONTyped;
const User_1 = require("./User");
const Referral_1 = require("./Referral");
const BankInfo_1 = require("./BankInfo");
/**
 * Check if a given object implements the ProfileResponse interface.
 */
function instanceOfProfileResponse(value) {
    if (!('referral' in value) || value['referral'] === undefined)
        return false;
    if (!('points' in value) || value['points'] === undefined)
        return false;
    if (!('user' in value) || value['user'] === undefined)
        return false;
    if (!('bankInfo' in value) || value['bankInfo'] === undefined)
        return false;
    return true;
}
function ProfileResponseFromJSON(json) {
    return ProfileResponseFromJSONTyped(json, false);
}
function ProfileResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'referral': (0, Referral_1.ReferralFromJSON)(json['referral']),
        'points': json['points'],
        'user': (0, User_1.UserFromJSON)(json['user']),
        'bankInfo': (json['bankInfo'].map(BankInfo_1.BankInfoFromJSON)),
    };
}
function ProfileResponseToJSON(json) {
    return ProfileResponseToJSONTyped(json, false);
}
function ProfileResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'referral': (0, Referral_1.ReferralToJSON)(value['referral']),
        'points': value['points'],
        'user': (0, User_1.UserToJSON)(value['user']),
        'bankInfo': (value['bankInfo'].map(BankInfo_1.BankInfoToJSON)),
    };
}
//# sourceMappingURL=ProfileResponse.js.map