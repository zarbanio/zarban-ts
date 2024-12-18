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
exports.instanceOfUserBorrowsResponse = instanceOfUserBorrowsResponse;
exports.UserBorrowsResponseFromJSON = UserBorrowsResponseFromJSON;
exports.UserBorrowsResponseFromJSONTyped = UserBorrowsResponseFromJSONTyped;
exports.UserBorrowsResponseToJSON = UserBorrowsResponseToJSON;
exports.UserBorrowsResponseToJSONTyped = UserBorrowsResponseToJSONTyped;
const LendingpoolBorrow_1 = require("./LendingpoolBorrow");
/**
 * Check if a given object implements the UserBorrowsResponse interface.
 */
function instanceOfUserBorrowsResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function UserBorrowsResponseFromJSON(json) {
    return UserBorrowsResponseFromJSONTyped(json, false);
}
function UserBorrowsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (json['data'].map(LendingpoolBorrow_1.LendingpoolBorrowFromJSON)),
    };
}
function UserBorrowsResponseToJSON(json) {
    return UserBorrowsResponseToJSONTyped(json, false);
}
function UserBorrowsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (value['data'].map(LendingpoolBorrow_1.LendingpoolBorrowToJSON)),
    };
}
//# sourceMappingURL=UserBorrowsResponse.js.map