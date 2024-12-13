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
exports.instanceOfStablecoinSystemDepositCollateralTxRequest = instanceOfStablecoinSystemDepositCollateralTxRequest;
exports.StablecoinSystemDepositCollateralTxRequestFromJSON = StablecoinSystemDepositCollateralTxRequestFromJSON;
exports.StablecoinSystemDepositCollateralTxRequestFromJSONTyped = StablecoinSystemDepositCollateralTxRequestFromJSONTyped;
exports.StablecoinSystemDepositCollateralTxRequestToJSON = StablecoinSystemDepositCollateralTxRequestToJSON;
exports.StablecoinSystemDepositCollateralTxRequestToJSONTyped = StablecoinSystemDepositCollateralTxRequestToJSONTyped;
/**
 * Check if a given object implements the StablecoinSystemDepositCollateralTxRequest interface.
 */
function instanceOfStablecoinSystemDepositCollateralTxRequest(value) {
    if (!('user' in value) || value['user'] === undefined)
        return false;
    if (!('vaultId' in value) || value['vaultId'] === undefined)
        return false;
    return true;
}
function StablecoinSystemDepositCollateralTxRequestFromJSON(json) {
    return StablecoinSystemDepositCollateralTxRequestFromJSONTyped(json, false);
}
function StablecoinSystemDepositCollateralTxRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'user': json['user'],
        'vaultId': json['vaultId'],
        'amount': json['amount'] == null ? undefined : json['amount'],
    };
}
function StablecoinSystemDepositCollateralTxRequestToJSON(json) {
    return StablecoinSystemDepositCollateralTxRequestToJSONTyped(json, false);
}
function StablecoinSystemDepositCollateralTxRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'user': value['user'],
        'vaultId': value['vaultId'],
        'amount': value['amount'],
    };
}
//# sourceMappingURL=StablecoinSystemDepositCollateralTxRequest.js.map