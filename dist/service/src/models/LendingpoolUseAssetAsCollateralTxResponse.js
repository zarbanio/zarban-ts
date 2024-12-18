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
exports.instanceOfLendingpoolUseAssetAsCollateralTxResponse = instanceOfLendingpoolUseAssetAsCollateralTxResponse;
exports.LendingpoolUseAssetAsCollateralTxResponseFromJSON = LendingpoolUseAssetAsCollateralTxResponseFromJSON;
exports.LendingpoolUseAssetAsCollateralTxResponseFromJSONTyped = LendingpoolUseAssetAsCollateralTxResponseFromJSONTyped;
exports.LendingpoolUseAssetAsCollateralTxResponseToJSON = LendingpoolUseAssetAsCollateralTxResponseToJSON;
exports.LendingpoolUseAssetAsCollateralTxResponseToJSONTyped = LendingpoolUseAssetAsCollateralTxResponseToJSONTyped;
const LendingpoolTxResponse_1 = require("./LendingpoolTxResponse");
const ChainActivity_1 = require("./ChainActivity");
/**
 * Check if a given object implements the LendingpoolUseAssetAsCollateralTxResponse interface.
 */
function instanceOfLendingpoolUseAssetAsCollateralTxResponse(value) {
    return true;
}
function LendingpoolUseAssetAsCollateralTxResponseFromJSON(json) {
    return LendingpoolUseAssetAsCollateralTxResponseFromJSONTyped(json, false);
}
function LendingpoolUseAssetAsCollateralTxResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'chainActivity': json['chainActivity'] == null ? undefined : (0, ChainActivity_1.ChainActivityFromJSON)(json['chainActivity']),
        'response': json['response'] == null ? undefined : (0, LendingpoolTxResponse_1.LendingpoolTxResponseFromJSON)(json['response']),
    };
}
function LendingpoolUseAssetAsCollateralTxResponseToJSON(json) {
    return LendingpoolUseAssetAsCollateralTxResponseToJSONTyped(json, false);
}
function LendingpoolUseAssetAsCollateralTxResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'chainActivity': (0, ChainActivity_1.ChainActivityToJSON)(value['chainActivity']),
        'response': (0, LendingpoolTxResponse_1.LendingpoolTxResponseToJSON)(value['response']),
    };
}
//# sourceMappingURL=LendingpoolUseAssetAsCollateralTxResponse.js.map