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
exports.instanceOfVaultEvent = instanceOfVaultEvent;
exports.VaultEventFromJSON = VaultEventFromJSON;
exports.VaultEventFromJSONTyped = VaultEventFromJSONTyped;
exports.VaultEventToJSON = VaultEventToJSON;
exports.VaultEventToJSONTyped = VaultEventToJSONTyped;
const Ilk_1 = require("./Ilk");
/**
 * Check if a given object implements the VaultEvent interface.
 */
function instanceOfVaultEvent(value) {
    if (!('deltaCollateral' in value) || value['deltaCollateral'] === undefined)
        return false;
    if (!('deltaDebt' in value) || value['deltaDebt'] === undefined)
        return false;
    if (!('ilk' in value) || value['ilk'] === undefined)
        return false;
    return true;
}
function VaultEventFromJSON(json) {
    return VaultEventFromJSONTyped(json, false);
}
function VaultEventFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'deltaCollateral': json['deltaCollateral'],
        'deltaDebt': json['deltaDebt'],
        'ilk': (0, Ilk_1.IlkFromJSON)(json['ilk']),
    };
}
function VaultEventToJSON(json) {
    return VaultEventToJSONTyped(json, false);
}
function VaultEventToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'deltaCollateral': value['deltaCollateral'],
        'deltaDebt': value['deltaDebt'],
        'ilk': (0, Ilk_1.IlkToJSON)(value['ilk']),
    };
}
//# sourceMappingURL=VaultEvent.js.map