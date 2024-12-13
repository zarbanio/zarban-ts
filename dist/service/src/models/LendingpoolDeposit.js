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
exports.instanceOfLendingpoolDeposit = instanceOfLendingpoolDeposit;
exports.LendingpoolDepositFromJSON = LendingpoolDepositFromJSON;
exports.LendingpoolDepositFromJSONTyped = LendingpoolDepositFromJSONTyped;
exports.LendingpoolDepositToJSON = LendingpoolDepositToJSON;
exports.LendingpoolDepositToJSONTyped = LendingpoolDepositToJSONTyped;
const Token_1 = require("./Token");
/**
 * Check if a given object implements the LendingpoolDeposit interface.
 */
function instanceOfLendingpoolDeposit(value) {
    if (!('user' in value) || value['user'] === undefined)
        return false;
    if (!('underlyingAsset' in value) || value['underlyingAsset'] === undefined)
        return false;
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    if (!('usageAsCollateralEnabledOnUser' in value) || value['usageAsCollateralEnabledOnUser'] === undefined)
        return false;
    if (!('supplyAPY' in value) || value['supplyAPY'] === undefined)
        return false;
    return true;
}
function LendingpoolDepositFromJSON(json) {
    return LendingpoolDepositFromJSONTyped(json, false);
}
function LendingpoolDepositFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'user': json['user'],
        'underlyingAsset': (0, Token_1.TokenFromJSON)(json['underlyingAsset']),
        'amount': json['amount'],
        'usageAsCollateralEnabledOnUser': json['usageAsCollateralEnabledOnUser'],
        'supplyAPY': json['supplyAPY'],
    };
}
function LendingpoolDepositToJSON(json) {
    return LendingpoolDepositToJSONTyped(json, false);
}
function LendingpoolDepositToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'user': value['user'],
        'underlyingAsset': (0, Token_1.TokenToJSON)(value['underlyingAsset']),
        'amount': value['amount'],
        'usageAsCollateralEnabledOnUser': value['usageAsCollateralEnabledOnUser'],
        'supplyAPY': value['supplyAPY'],
    };
}
//# sourceMappingURL=LendingpoolDeposit.js.map