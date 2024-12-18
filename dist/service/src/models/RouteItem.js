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
exports.instanceOfRouteItem = instanceOfRouteItem;
exports.RouteItemFromJSON = RouteItemFromJSON;
exports.RouteItemFromJSONTyped = RouteItemFromJSONTyped;
exports.RouteItemToJSON = RouteItemToJSON;
exports.RouteItemToJSONTyped = RouteItemToJSONTyped;
const Token_1 = require("./Token");
/**
 * Check if a given object implements the RouteItem interface.
 */
function instanceOfRouteItem(value) {
    if (!('address' in value) || value['address'] === undefined)
        return false;
    if (!('tokenIn' in value) || value['tokenIn'] === undefined)
        return false;
    if (!('tokenOut' in value) || value['tokenOut'] === undefined)
        return false;
    if (!('fee' in value) || value['fee'] === undefined)
        return false;
    return true;
}
function RouteItemFromJSON(json) {
    return RouteItemFromJSONTyped(json, false);
}
function RouteItemFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'address': json['address'],
        'tokenIn': (0, Token_1.TokenFromJSON)(json['tokenIn']),
        'tokenOut': (0, Token_1.TokenFromJSON)(json['tokenOut']),
        'fee': json['fee'],
    };
}
function RouteItemToJSON(json) {
    return RouteItemToJSONTyped(json, false);
}
function RouteItemToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'address': value['address'],
        'tokenIn': (0, Token_1.TokenToJSON)(value['tokenIn']),
        'tokenOut': (0, Token_1.TokenToJSON)(value['tokenOut']),
        'fee': value['fee'],
    };
}
//# sourceMappingURL=RouteItem.js.map