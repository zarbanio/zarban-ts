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
exports.instanceOfEventDetailsResponse = instanceOfEventDetailsResponse;
exports.EventDetailsResponseFromJSON = EventDetailsResponseFromJSON;
exports.EventDetailsResponseFromJSONTyped = EventDetailsResponseFromJSONTyped;
exports.EventDetailsResponseToJSON = EventDetailsResponseToJSON;
exports.EventDetailsResponseToJSONTyped = EventDetailsResponseToJSONTyped;
const Log_1 = require("./Log");
/**
 * Check if a given object implements the EventDetailsResponse interface.
 */
function instanceOfEventDetailsResponse(value) {
    if (!('data' in value) || value['data'] === undefined)
        return false;
    return true;
}
function EventDetailsResponseFromJSON(json) {
    return EventDetailsResponseFromJSONTyped(json, false);
}
function EventDetailsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if (json == null) {
        return json;
    }
    return {
        'data': (json['data'].map(Log_1.LogFromJSON)),
    };
}
function EventDetailsResponseToJSON(json) {
    return EventDetailsResponseToJSONTyped(json, false);
}
function EventDetailsResponseToJSONTyped(value, ignoreDiscriminator = false) {
    if (value == null) {
        return value;
    }
    return {
        'data': (value['data'].map(Log_1.LogToJSON)),
    };
}
//# sourceMappingURL=EventDetailsResponse.js.map