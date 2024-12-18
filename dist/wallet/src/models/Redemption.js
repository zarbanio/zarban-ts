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
exports.instanceOfRedemption = instanceOfRedemption;
exports.RedemptionFromJSON = RedemptionFromJSON;
exports.RedemptionFromJSONTyped = RedemptionFromJSONTyped;
exports.RedemptionToJSON = RedemptionToJSON;
exports.RedemptionToJSONTyped = RedemptionToJSONTyped;
const Currency_1 = require("./Currency");
const Timestamp_1 = require("./Timestamp");
const BankInfo_1 = require("./BankInfo");
/**
 * Check if a given object implements the Redemption interface.
 */
function instanceOfRedemption(value) {
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    if (!('destinationBankInfo' in value) || value['destinationBankInfo'] === undefined)
        return false;
    if (!('status' in value) || value['status'] === undefined)
        return false;
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('createdAt' in value) || value['createdAt'] === undefined)
        return false;
    return true;
}
function RedemptionFromJSON(json) {
    return RedemptionFromJSONTyped(json, false);
}
function RedemptionFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'amount': (0, Currency_1.CurrencyFromJSON)(json['amount']),
        'destinationBankInfo': (0, BankInfo_1.BankInfoFromJSON)(json['destinationBankInfo']),
        'status': json['status'],
        'id': json['id'],
        'createdAt': (0, Timestamp_1.TimestampFromJSON)(json['createdAt']),
        'updatedAt': json['updatedAt'] == null ? undefined : (0, Timestamp_1.TimestampFromJSON)(json['updatedAt']),
        'payaTrackingCode': json['payaTrackingCode'] == null ? undefined : json['payaTrackingCode'],
    };
}
function RedemptionToJSON(json) {
    return RedemptionToJSONTyped(json, false);
}
function RedemptionToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'amount': (0, Currency_1.CurrencyToJSON)(value['amount']),
        'destinationBankInfo': (0, BankInfo_1.BankInfoToJSON)(value['destinationBankInfo']),
        'status': value['status'],
        'id': value['id'],
        'createdAt': (0, Timestamp_1.TimestampToJSON)(value['createdAt']),
        'updatedAt': (0, Timestamp_1.TimestampToJSON)(value['updatedAt']),
        'payaTrackingCode': value['payaTrackingCode'],
    };
}
//# sourceMappingURL=Redemption.js.map