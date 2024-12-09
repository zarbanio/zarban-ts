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

export class AccountStakingSummary {
    'totalStake': { [key: string]: string; };
    'unclaimedReward': { [key: string]: string; };
    /**
    * Net annual percentage yield in staking contract
    */
    'netApy': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "totalStake",
            "baseName": "totalStake",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "unclaimedReward",
            "baseName": "unclaimedReward",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "netApy",
            "baseName": "netApy",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return AccountStakingSummary.attributeTypeMap;
    }
}

