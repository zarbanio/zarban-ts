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
import type { LendingpoolStats } from './LendingpoolStats';
import {
    LendingpoolStatsFromJSON,
    LendingpoolStatsFromJSONTyped,
    LendingpoolStatsToJSON,
    LendingpoolStatsToJSONTyped,
} from './LendingpoolStats';
import type { StablecoinSystemStats } from './StablecoinSystemStats';
import {
    StablecoinSystemStatsFromJSON,
    StablecoinSystemStatsFromJSONTyped,
    StablecoinSystemStatsToJSON,
    StablecoinSystemStatsToJSONTyped,
} from './StablecoinSystemStats';

/**
 * 
 * @export
 * @interface Stats
 */
export interface Stats {
    /**
     * 
     * @type {StablecoinSystemStats}
     * @memberof Stats
     */
    stablecoinSystem: StablecoinSystemStats;
    /**
     * 
     * @type {LendingpoolStats}
     * @memberof Stats
     */
    lendingpool: LendingpoolStats;
}

/**
 * Check if a given object implements the Stats interface.
 */
export function instanceOfStats(value: object): value is Stats {
    if (!('stablecoinSystem' in value) || value['stablecoinSystem'] === undefined) return false;
    if (!('lendingpool' in value) || value['lendingpool'] === undefined) return false;
    return true;
}

export function StatsFromJSON(json: any): Stats {
    return StatsFromJSONTyped(json, false);
}

export function StatsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Stats {
    if (json == null) {
        return json;
    }
    return {
        
        'stablecoinSystem': StablecoinSystemStatsFromJSON(json['stablecoinSystem']),
        'lendingpool': LendingpoolStatsFromJSON(json['lendingpool']),
    };
}

export function StatsToJSON(json: any): Stats {
    return StatsToJSONTyped(json, false);
}

export function StatsToJSONTyped(value?: Stats | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'stablecoinSystem': StablecoinSystemStatsToJSON(value['stablecoinSystem']),
        'lendingpool': LendingpoolStatsToJSON(value['lendingpool']),
    };
}

