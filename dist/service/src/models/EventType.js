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
exports.EventType = void 0;
exports.instanceOfEventType = instanceOfEventType;
exports.EventTypeFromJSON = EventTypeFromJSON;
exports.EventTypeFromJSONTyped = EventTypeFromJSONTyped;
exports.EventTypeToJSON = EventTypeToJSON;
exports.EventTypeToJSONTyped = EventTypeToJSONTyped;
/**
 * The type of the event. who has triggered the event.
 * @export
 */
exports.EventType = {
    EXECUTIVE: 'executive',
    ORACLE: 'oracle',
    USER: 'user'
};
function instanceOfEventType(value) {
    for (const key in exports.EventType) {
        if (Object.prototype.hasOwnProperty.call(exports.EventType, key)) {
            if (exports.EventType[key] === value) {
                return true;
            }
        }
    }
    return false;
}
function EventTypeFromJSON(json) {
    return EventTypeFromJSONTyped(json, false);
}
function EventTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
function EventTypeToJSON(value) {
    return value;
}
function EventTypeToJSONTyped(value, ignoreDiscriminator) {
    return value;
}
//# sourceMappingURL=EventType.js.map