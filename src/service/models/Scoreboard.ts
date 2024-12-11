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
import type { ScoreboardItem } from './ScoreboardItem';
import {
    ScoreboardItemFromJSON,
    ScoreboardItemFromJSONTyped,
    ScoreboardItemToJSON,
    ScoreboardItemToJSONTyped,
} from './ScoreboardItem';

/**
 * 
 * @export
 * @interface Scoreboard
 */
export interface Scoreboard {
    /**
     * 
     * @type {Array<ScoreboardItem>}
     * @memberof Scoreboard
     */
    items: Array<ScoreboardItem>;
}

/**
 * Check if a given object implements the Scoreboard interface.
 */
export function instanceOfScoreboard(value: object): value is Scoreboard {
    if (!('items' in value) || value['items'] === undefined) return false;
    return true;
}

export function ScoreboardFromJSON(json: any): Scoreboard {
    return ScoreboardFromJSONTyped(json, false);
}

export function ScoreboardFromJSONTyped(json: any, ignoreDiscriminator: boolean): Scoreboard {
    if (json == null) {
        return json;
    }
    return {
        
        'items': ((json['items'] as Array<any>).map(ScoreboardItemFromJSON)),
    };
}

export function ScoreboardToJSON(json: any): Scoreboard {
    return ScoreboardToJSONTyped(json, false);
}

export function ScoreboardToJSONTyped(value?: Scoreboard | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'items': ((value['items'] as Array<any>).map(ScoreboardItemToJSON)),
    };
}

