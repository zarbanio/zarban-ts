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

import { mapValues } from '../runtime';
import type { Log } from './Log';
import {
    LogFromJSON,
    LogFromJSONTyped,
    LogToJSON,
    LogToJSONTyped,
} from './Log';

/**
 * 
 * @export
 * @interface EventDetailsResponse
 */
export interface EventDetailsResponse {
    /**
     * 
     * @type {Array<Log>}
     * @memberof EventDetailsResponse
     */
    data: Array<Log>;
}

/**
 * Check if a given object implements the EventDetailsResponse interface.
 */
export function instanceOfEventDetailsResponse(value: object): value is EventDetailsResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function EventDetailsResponseFromJSON(json: any): EventDetailsResponse {
    return EventDetailsResponseFromJSONTyped(json, false);
}

export function EventDetailsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventDetailsResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(LogFromJSON)),
    };
}

export function EventDetailsResponseToJSON(json: any): EventDetailsResponse {
    return EventDetailsResponseToJSONTyped(json, false);
}

export function EventDetailsResponseToJSONTyped(value?: EventDetailsResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(LogToJSON)),
    };
}
