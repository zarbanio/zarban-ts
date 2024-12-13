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
exports.instanceOfStablecoinSystemTakeTxRequest = instanceOfStablecoinSystemTakeTxRequest;
exports.StablecoinSystemTakeTxRequestFromJSON = StablecoinSystemTakeTxRequestFromJSON;
exports.StablecoinSystemTakeTxRequestFromJSONTyped = StablecoinSystemTakeTxRequestFromJSONTyped;
exports.StablecoinSystemTakeTxRequestToJSON = StablecoinSystemTakeTxRequestToJSON;
exports.StablecoinSystemTakeTxRequestToJSONTyped = StablecoinSystemTakeTxRequestToJSONTyped;
/**
 * Check if a given object implements the StablecoinSystemTakeTxRequest interface.
 */
function instanceOfStablecoinSystemTakeTxRequest(value) {
    if (!('user' in value) || value['user'] === undefined)
        return false;
    if (!('auctionId' in value) || value['auctionId'] === undefined)
        return false;
    if (!('ilk' in value) || value['ilk'] === undefined)
        return false;
    if (!('collateralAmountUpperLimit' in value) || value['collateralAmountUpperLimit'] === undefined)
        return false;
    if (!('maxAcceptablePrice' in value) || value['maxAcceptablePrice'] === undefined)
        return false;
    return true;
}
function StablecoinSystemTakeTxRequestFromJSON(json) {
    return StablecoinSystemTakeTxRequestFromJSONTyped(json, false);
}
function StablecoinSystemTakeTxRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'user': json['user'],
        'auctionId': json['auctionId'],
        'ilk': json['ilk'],
        'collateralAmountUpperLimit': json['collateralAmountUpperLimit'],
        'maxAcceptablePrice': json['maxAcceptablePrice'],
    };
}
function StablecoinSystemTakeTxRequestToJSON(json) {
    return StablecoinSystemTakeTxRequestToJSONTyped(json, false);
}
function StablecoinSystemTakeTxRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'user': value['user'],
        'auctionId': value['auctionId'],
        'ilk': value['ilk'],
        'collateralAmountUpperLimit': value['collateralAmountUpperLimit'],
        'maxAcceptablePrice': value['maxAcceptablePrice'],
    };
}
//# sourceMappingURL=StablecoinSystemTakeTxRequest.js.map