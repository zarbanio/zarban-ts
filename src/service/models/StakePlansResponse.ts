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
import type { StakePlan } from './StakePlan';
import {
    StakePlanFromJSON,
    StakePlanFromJSONTyped,
    StakePlanToJSON,
    StakePlanToJSONTyped,
} from './StakePlan';

/**
 * 
 * @export
 * @interface StakePlansResponse
 */
export interface StakePlansResponse {
    /**
     * 
     * @type {Array<StakePlan>}
     * @memberof StakePlansResponse
     */
    data: Array<StakePlan>;
}

/**
 * Check if a given object implements the StakePlansResponse interface.
 */
export function instanceOfStakePlansResponse(value: object): value is StakePlansResponse {
    if (!('data' in value) || value['data'] === undefined) return false;
    return true;
}

export function StakePlansResponseFromJSON(json: any): StakePlansResponse {
    return StakePlansResponseFromJSONTyped(json, false);
}

export function StakePlansResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): StakePlansResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'data': ((json['data'] as Array<any>).map(StakePlanFromJSON)),
    };
}

export function StakePlansResponseToJSON(json: any): StakePlansResponse {
    return StakePlansResponseToJSONTyped(json, false);
}

export function StakePlansResponseToJSONTyped(value?: StakePlansResponse | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'data': ((value['data'] as Array<any>).map(StakePlanToJSON)),
    };
}

