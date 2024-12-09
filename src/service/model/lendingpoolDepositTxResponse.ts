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
import { ChainActivity } from './chainActivity';
import { LendingpoolTxResponse } from './lendingpoolTxResponse';

export class LendingpoolDepositTxResponse {
    'chainActivity'?: ChainActivity;
    'response'?: LendingpoolTxResponse;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chainActivity",
            "baseName": "chainActivity",
            "type": "ChainActivity"
        },
        {
            "name": "response",
            "baseName": "response",
            "type": "LendingpoolTxResponse"
        }    ];

    static getAttributeTypeMap() {
        return LendingpoolDepositTxResponse.attributeTypeMap;
    }
}

