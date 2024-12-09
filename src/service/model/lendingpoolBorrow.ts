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
import { Token } from './token';

export class LendingpoolBorrow {
    /**
    * The Ethereum address of the user.
    */
    'user': string;
    'underlyingAsset': Token;
    'amount': { [key: string]: string; };
    /**
    * The borrow rate.
    */
    'borrowRate': string;
    'maxBorrowAmount': { [key: string]: string; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        },
        {
            "name": "underlyingAsset",
            "baseName": "underlyingAsset",
            "type": "Token"
        },
        {
            "name": "amount",
            "baseName": "amount",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "borrowRate",
            "baseName": "borrowRate",
            "type": "string"
        },
        {
            "name": "maxBorrowAmount",
            "baseName": "maxBorrowAmount",
            "type": "{ [key: string]: string; }"
        }    ];

    static getAttributeTypeMap() {
        return LendingpoolBorrow.attributeTypeMap;
    }
}

