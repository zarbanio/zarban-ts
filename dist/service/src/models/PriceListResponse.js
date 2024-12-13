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
exports.instanceOfPriceListResponse = instanceOfPriceListResponse;
exports.PriceListResponseFromJSON = PriceListResponseFromJSON;
exports.PriceListResponseFromJSONTyped = PriceListResponseFromJSONTyped;
exports.PriceListResponseToJSON = PriceListResponseToJSON;
exports.PriceListResponseToJSONTyped = PriceListResponseToJSONTyped;
const Price_1 = require("./Price");
/**
 * Check if a given object implements the PriceListResponse interface.
 */
function instanceOfPriceListResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function PriceListResponseFromJSON(json) {
    return PriceListResponseFromJSONTyped(json, false);
}
function PriceListResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (json['data'].map(Price_1.PriceFromJSON)),
    };
}
function PriceListResponseToJSON(json) {
    return PriceListResponseToJSONTyped(json, false);
}
function PriceListResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (value['data'].map(Price_1.PriceToJSON)),
    };
}
//# sourceMappingURL=PriceListResponse.js.map