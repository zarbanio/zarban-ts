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
exports.instanceOfFormattedReserveData = instanceOfFormattedReserveData;
exports.FormattedReserveDataFromJSON = FormattedReserveDataFromJSON;
exports.FormattedReserveDataFromJSONTyped = FormattedReserveDataFromJSONTyped;
exports.FormattedReserveDataToJSON = FormattedReserveDataToJSON;
exports.FormattedReserveDataToJSONTyped = FormattedReserveDataToJSONTyped;
const Token_1 = require("./Token");
/**
 * Check if a given object implements the FormattedReserveData interface.
 */
function instanceOfFormattedReserveData(value) {
    if (!('id' in value) || value['id'] === undefined)
        return false;
    if (!('underlyingAsset' in value) || value['underlyingAsset'] === undefined)
        return false;
    if (!('zTokenAddress' in value) || value['zTokenAddress'] === undefined)
        return false;
    if (!('variableDebtTokenAddress' in value) || value['variableDebtTokenAddress'] === undefined)
        return false;
    if (!('borrowingEnabled' in value) || value['borrowingEnabled'] === undefined)
        return false;
    if (!('isActive' in value) || value['isActive'] === undefined)
        return false;
    if (!('isFrozen' in value) || value['isFrozen'] === undefined)
        return false;
    if (!('usageAsCollateralEnabled' in value) || value['usageAsCollateralEnabled'] === undefined)
        return false;
    if (!('reserveFactor' in value) || value['reserveFactor'] === undefined)
        return false;
    if (!('baseLTVasCollateral' in value) || value['baseLTVasCollateral'] === undefined)
        return false;
    if (!('reserveLiquidationThreshold' in value) || value['reserveLiquidationThreshold'] === undefined)
        return false;
    if (!('reserveLiquidationBonus' in value) || value['reserveLiquidationBonus'] === undefined)
        return false;
    if (!('utilizationRate' in value) || value['utilizationRate'] === undefined)
        return false;
    if (!('totalDebt' in value) || value['totalDebt'] === undefined)
        return false;
    if (!('totalLiquidity' in value) || value['totalLiquidity'] === undefined)
        return false;
    if (!('availableLiquidity' in value) || value['availableLiquidity'] === undefined)
        return false;
    if (!('supplyAPY' in value) || value['supplyAPY'] === undefined)
        return false;
    if (!('supplyAPR' in value) || value['supplyAPR'] === undefined)
        return false;
    if (!('variableBorrowAPY' in value) || value['variableBorrowAPY'] === undefined)
        return false;
    if (!('variableBorrowAPR' in value) || value['variableBorrowAPR'] === undefined)
        return false;
    if (!('price' in value) || value['price'] === undefined)
        return false;
    return true;
}
function FormattedReserveDataFromJSON(json) {
    return FormattedReserveDataFromJSONTyped(json, false);
}
function FormattedReserveDataFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'id': json['id'],
        'underlyingAsset': (0, Token_1.TokenFromJSON)(json['underlyingAsset']),
        'zTokenAddress': json['zTokenAddress'],
        'variableDebtTokenAddress': json['variableDebtTokenAddress'],
        'borrowingEnabled': json['borrowingEnabled'],
        'isActive': json['isActive'],
        'isFrozen': json['isFrozen'],
        'usageAsCollateralEnabled': json['usageAsCollateralEnabled'],
        'reserveFactor': json['reserveFactor'],
        'baseLTVasCollateral': json['baseLTVasCollateral'],
        'reserveLiquidationThreshold': json['reserveLiquidationThreshold'],
        'reserveLiquidationBonus': json['reserveLiquidationBonus'],
        'utilizationRate': json['utilizationRate'],
        'totalDebt': json['totalDebt'],
        'totalLiquidity': json['totalLiquidity'],
        'availableLiquidity': json['availableLiquidity'],
        'supplyAPY': json['supplyAPY'],
        'supplyAPR': json['supplyAPR'],
        'variableBorrowAPY': json['variableBorrowAPY'],
        'variableBorrowAPR': json['variableBorrowAPR'],
        'price': json['price'],
    };
}
function FormattedReserveDataToJSON(json) {
    return FormattedReserveDataToJSONTyped(json, false);
}
function FormattedReserveDataToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'id': value['id'],
        'underlyingAsset': (0, Token_1.TokenToJSON)(value['underlyingAsset']),
        'zTokenAddress': value['zTokenAddress'],
        'variableDebtTokenAddress': value['variableDebtTokenAddress'],
        'borrowingEnabled': value['borrowingEnabled'],
        'isActive': value['isActive'],
        'isFrozen': value['isFrozen'],
        'usageAsCollateralEnabled': value['usageAsCollateralEnabled'],
        'reserveFactor': value['reserveFactor'],
        'baseLTVasCollateral': value['baseLTVasCollateral'],
        'reserveLiquidationThreshold': value['reserveLiquidationThreshold'],
        'reserveLiquidationBonus': value['reserveLiquidationBonus'],
        'utilizationRate': value['utilizationRate'],
        'totalDebt': value['totalDebt'],
        'totalLiquidity': value['totalLiquidity'],
        'availableLiquidity': value['availableLiquidity'],
        'supplyAPY': value['supplyAPY'],
        'supplyAPR': value['supplyAPR'],
        'variableBorrowAPY': value['variableBorrowAPY'],
        'variableBorrowAPR': value['variableBorrowAPR'],
        'price': value['price'],
    };
}
//# sourceMappingURL=FormattedReserveData.js.map