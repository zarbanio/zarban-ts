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
exports.instanceOfAccountLendingpoolSummary = instanceOfAccountLendingpoolSummary;
exports.AccountLendingpoolSummaryFromJSON = AccountLendingpoolSummaryFromJSON;
exports.AccountLendingpoolSummaryFromJSONTyped = AccountLendingpoolSummaryFromJSONTyped;
exports.AccountLendingpoolSummaryToJSON = AccountLendingpoolSummaryToJSON;
exports.AccountLendingpoolSummaryToJSONTyped = AccountLendingpoolSummaryToJSONTyped;
/**
 * Check if a given object implements the AccountLendingpoolSummary interface.
 */
function instanceOfAccountLendingpoolSummary(value) {
    if (!('totalDebt' in value) || value['totalDebt'] === undefined)
        return false;
    if (!('totalDeposits' in value) || value['totalDeposits'] === undefined)
        return false;
    if (!('totalCollateral' in value) || value['totalCollateral'] === undefined)
        return false;
    if (!('healthFactor' in value) || value['healthFactor'] === undefined)
        return false;
    if (!('netApy' in value) || value['netApy'] === undefined)
        return false;
    if (!('totalSupplyApy' in value) || value['totalSupplyApy'] === undefined)
        return false;
    if (!('totalBorrowApy' in value) || value['totalBorrowApy'] === undefined)
        return false;
    if (!('availableToBorrow' in value) || value['availableToBorrow'] === undefined)
        return false;
    if (!('borrowPowerUsed' in value) || value['borrowPowerUsed'] === undefined)
        return false;
    if (!('currentLiquidationThreshold' in value) || value['currentLiquidationThreshold'] === undefined)
        return false;
    if (!('loanToValue' in value) || value['loanToValue'] === undefined)
        return false;
    return true;
}
function AccountLendingpoolSummaryFromJSON(json) {
    return AccountLendingpoolSummaryFromJSONTyped(json, false);
}
function AccountLendingpoolSummaryFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'totalDebt': json['totalDebt'],
        'totalDeposits': json['totalDeposits'],
        'totalCollateral': json['totalCollateral'],
        'healthFactor': json['healthFactor'],
        'netApy': json['netApy'],
        'totalSupplyApy': json['totalSupplyApy'],
        'totalBorrowApy': json['totalBorrowApy'],
        'availableToBorrow': json['availableToBorrow'],
        'borrowPowerUsed': json['borrowPowerUsed'],
        'currentLiquidationThreshold': json['currentLiquidationThreshold'],
        'loanToValue': json['loanToValue'],
    };
}
function AccountLendingpoolSummaryToJSON(json) {
    return AccountLendingpoolSummaryToJSONTyped(json, false);
}
function AccountLendingpoolSummaryToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'totalDebt': value['totalDebt'],
        'totalDeposits': value['totalDeposits'],
        'totalCollateral': value['totalCollateral'],
        'healthFactor': value['healthFactor'],
        'netApy': value['netApy'],
        'totalSupplyApy': value['totalSupplyApy'],
        'totalBorrowApy': value['totalBorrowApy'],
        'availableToBorrow': value['availableToBorrow'],
        'borrowPowerUsed': value['borrowPowerUsed'],
        'currentLiquidationThreshold': value['currentLiquidationThreshold'],
        'loanToValue': value['loanToValue'],
    };
}
//# sourceMappingURL=AccountLendingpoolSummary.js.map