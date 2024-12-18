"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Zarban Wallet API
 * API for Zarban wallet services.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@zarban.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.instanceOfLoanPlanResponse = instanceOfLoanPlanResponse;
exports.LoanPlanResponseFromJSON = LoanPlanResponseFromJSON;
exports.LoanPlanResponseFromJSONTyped = LoanPlanResponseFromJSONTyped;
exports.LoanPlanResponseToJSON = LoanPlanResponseToJSON;
exports.LoanPlanResponseToJSONTyped = LoanPlanResponseToJSONTyped;
const LoanPlan_1 = require("./LoanPlan");
/**
 * Check if a given object implements the LoanPlanResponse interface.
 */
function instanceOfLoanPlanResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function LoanPlanResponseFromJSON(json) {
    return LoanPlanResponseFromJSONTyped(json, false);
}
function LoanPlanResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (json['data'].map(LoanPlan_1.LoanPlanFromJSON)),
    };
}
function LoanPlanResponseToJSON(json) {
    return LoanPlanResponseToJSONTyped(json, false);
}
function LoanPlanResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (value['data'].map(LoanPlan_1.LoanPlanToJSON)),
    };
}
//# sourceMappingURL=LoanPlanResponse.js.map