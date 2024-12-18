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
exports.instanceOfV3PoolInRoute = instanceOfV3PoolInRoute;
exports.V3PoolInRouteFromJSON = V3PoolInRouteFromJSON;
exports.V3PoolInRouteFromJSONTyped = V3PoolInRouteFromJSONTyped;
exports.V3PoolInRouteToJSON = V3PoolInRouteToJSON;
exports.V3PoolInRouteToJSONTyped = V3PoolInRouteToJSONTyped;
const Token_1 = require("./Token");
/**
 * Check if a given object implements the V3PoolInRoute interface.
 */
function instanceOfV3PoolInRoute(value) {
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
function V3PoolInRouteFromJSON(json) {
    return V3PoolInRouteFromJSONTyped(json, false);
}
function V3PoolInRouteFromJSONTyped(json, ignoreDiscriminator) {
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
function V3PoolInRouteToJSON(json) {
    return V3PoolInRouteToJSONTyped(json, false);
}
function V3PoolInRouteToJSONTyped(value, ignoreDiscriminator = false) {
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
//# sourceMappingURL=V3PoolInRoute.js.map