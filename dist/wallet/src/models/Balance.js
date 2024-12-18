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
exports.instanceOfBalance = instanceOfBalance;
exports.BalanceFromJSON = BalanceFromJSON;
exports.BalanceFromJSONTyped = BalanceFromJSONTyped;
exports.BalanceToJSON = BalanceToJSON;
exports.BalanceToJSONTyped = BalanceToJSONTyped;
const Coin_1 = require("./Coin");
const Currency_1 = require("./Currency");
/**
 * Check if a given object implements the Balance interface.
 */
function instanceOfBalance(value) {
    if (!('locked' in value) || value['locked'] === undefined)
        return false;
    if (!('coin' in value) || value['coin'] === undefined)
        return false;
    if (!('balance' in value) || value['balance'] === undefined)
        return false;
    return true;
}
function BalanceFromJSON(json) {
    return BalanceFromJSONTyped(json, false);
}
function BalanceFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'locked': (0, Currency_1.CurrencyFromJSON)(json['locked']),
        'coin': (0, Coin_1.CoinFromJSON)(json['coin']),
        'balance': (0, Currency_1.CurrencyFromJSON)(json['balance']),
    };
}
function BalanceToJSON(json) {
    return BalanceToJSONTyped(json, false);
}
function BalanceToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'locked': (0, Currency_1.CurrencyToJSON)(value['locked']),
        'coin': (0, Coin_1.CoinToJSON)(value['coin']),
        'balance': (0, Currency_1.CurrencyToJSON)(value['balance']),
    };
}
//# sourceMappingURL=Balance.js.map