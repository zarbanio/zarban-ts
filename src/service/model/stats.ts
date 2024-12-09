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

import { RequestFile } from './models';
import { LendingpoolStats } from './lendingpoolStats';
import { StablecoinSystemStats } from './stablecoinSystemStats';

export class Stats {
    'stablecoinSystem': StablecoinSystemStats;
    'lendingpool': LendingpoolStats;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "stablecoinSystem",
            "baseName": "stablecoinSystem",
            "type": "StablecoinSystemStats"
        },
        {
            "name": "lendingpool",
            "baseName": "lendingpool",
            "type": "LendingpoolStats"
        }    ];

    static getAttributeTypeMap() {
        return Stats.attributeTypeMap;
    }
}

