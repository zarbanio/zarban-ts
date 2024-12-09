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

export class StablecoinSystemDepositCollateralTxRequest {
    /**
    * Ethereum address of the user
    */
    'user': string;
    /**
    * The ID of the vault
    */
    'vaultId': number;
    /**
    * The amount of collateral to deposit in native token units, if not provided, it will be calculated based on the wallet balance
    */
    'amount'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        },
        {
            "name": "vaultId",
            "baseName": "vaultId",
            "type": "number"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return StablecoinSystemDepositCollateralTxRequest.attributeTypeMap;
    }
}

