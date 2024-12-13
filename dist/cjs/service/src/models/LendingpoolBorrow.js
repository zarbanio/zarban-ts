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
exports.instanceOfLendingpoolBorrow = instanceOfLendingpoolBorrow;
exports.LendingpoolBorrowFromJSON = LendingpoolBorrowFromJSON;
exports.LendingpoolBorrowFromJSONTyped = LendingpoolBorrowFromJSONTyped;
exports.LendingpoolBorrowToJSON = LendingpoolBorrowToJSON;
exports.LendingpoolBorrowToJSONTyped = LendingpoolBorrowToJSONTyped;
const Token_1 = require("./Token");
/**
 * Check if a given object implements the LendingpoolBorrow interface.
 */
function instanceOfLendingpoolBorrow(value) {
    if (!('user' in value) || value['user'] === undefined)
        return false;
    if (!('underlyingAsset' in value) || value['underlyingAsset'] === undefined)
        return false;
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    if (!('borrowRate' in value) || value['borrowRate'] === undefined)
        return false;
    if (!('maxBorrowAmount' in value) || value['maxBorrowAmount'] === undefined)
        return false;
    return true;
}
function LendingpoolBorrowFromJSON(json) {
    return LendingpoolBorrowFromJSONTyped(json, false);
}
function LendingpoolBorrowFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'user': json['user'],
        'underlyingAsset': (0, Token_1.TokenFromJSON)(json['underlyingAsset']),
        'amount': json['amount'],
        'borrowRate': json['borrowRate'],
        'maxBorrowAmount': json['maxBorrowAmount'],
    };
}
function LendingpoolBorrowToJSON(json) {
    return LendingpoolBorrowToJSONTyped(json, false);
}
function LendingpoolBorrowToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'user': value['user'],
        'underlyingAsset': (0, Token_1.TokenToJSON)(value['underlyingAsset']),
        'amount': value['amount'],
        'borrowRate': value['borrowRate'],
        'maxBorrowAmount': value['maxBorrowAmount'],
    };
}
//# sourceMappingURL=LendingpoolBorrow.js.map