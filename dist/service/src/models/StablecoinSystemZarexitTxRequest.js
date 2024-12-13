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
exports.instanceOfStablecoinSystemZarexitTxRequest = instanceOfStablecoinSystemZarexitTxRequest;
exports.StablecoinSystemZarexitTxRequestFromJSON = StablecoinSystemZarexitTxRequestFromJSON;
exports.StablecoinSystemZarexitTxRequestFromJSONTyped = StablecoinSystemZarexitTxRequestFromJSONTyped;
exports.StablecoinSystemZarexitTxRequestToJSON = StablecoinSystemZarexitTxRequestToJSON;
exports.StablecoinSystemZarexitTxRequestToJSONTyped = StablecoinSystemZarexitTxRequestToJSONTyped;
/**
 * Check if a given object implements the StablecoinSystemZarexitTxRequest interface.
 */
function instanceOfStablecoinSystemZarexitTxRequest(value) {
    if (!('user' in value) || value['user'] === undefined)
        return false;
    if (!('amount' in value) || value['amount'] === undefined)
        return false;
    return true;
}
function StablecoinSystemZarexitTxRequestFromJSON(json) {
    return StablecoinSystemZarexitTxRequestFromJSONTyped(json, false);
}
function StablecoinSystemZarexitTxRequestFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'user': json['user'],
        'amount': json['amount'],
    };
}
function StablecoinSystemZarexitTxRequestToJSON(json) {
    return StablecoinSystemZarexitTxRequestToJSONTyped(json, false);
}
function StablecoinSystemZarexitTxRequestToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'user': value['user'],
        'amount': value['amount'],
    };
}
//# sourceMappingURL=StablecoinSystemZarexitTxRequest.js.map