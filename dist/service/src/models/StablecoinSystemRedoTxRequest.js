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
exports.instanceOfStablecoinSystemRedoTxRequest = instanceOfStablecoinSystemRedoTxRequest;
exports.StablecoinSystemRedoTxRequestFromJSON = StablecoinSystemRedoTxRequestFromJSON;
exports.StablecoinSystemRedoTxRequestFromJSONTyped = StablecoinSystemRedoTxRequestFromJSONTyped;
exports.StablecoinSystemRedoTxRequestToJSON = StablecoinSystemRedoTxRequestToJSON;
exports.StablecoinSystemRedoTxRequestToJSONTyped = StablecoinSystemRedoTxRequestToJSONTyped;
/**
 * Check if a given object implements the StablecoinSystemRedoTxRequest interface.
 */
function instanceOfStablecoinSystemRedoTxRequest(value) {
    if (!('user' in value) || value['user'] === undefined)
        return false;
    if (!('auctionId' in value) || value['auctionId'] === undefined)
        return false;
    if (!('ilk' in value) || value['ilk'] === undefined)
        return false;
    return true;
}
function StablecoinSystemRedoTxRequestFromJSON(json) {
    return StablecoinSystemRedoTxRequestFromJSONTyped(json, false);
}
function StablecoinSystemRedoTxRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'user': json['user'],
        'auctionId': json['auctionId'],
        'ilk': json['ilk'],
    };
}
function StablecoinSystemRedoTxRequestToJSON(json) {
    return StablecoinSystemRedoTxRequestToJSONTyped(json, false);
}
function StablecoinSystemRedoTxRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'user': value['user'],
        'auctionId': value['auctionId'],
        'ilk': value['ilk'],
    };
}
//# sourceMappingURL=StablecoinSystemRedoTxRequest.js.map