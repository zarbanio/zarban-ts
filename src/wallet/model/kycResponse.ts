/**
 * Zarban Wallet API
 * API for Zarban wallet services.
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: info@zarban.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { BankInfo } from './bankInfo';

export class KycResponse {
    /**
    * KYC request ID
    */
    'id': string;
    /**
    * First name
    */
    'firstName': string;
    /**
    * Last name
    */
    'lastName': string;
    /**
    * National code
    */
    'nationalId': string;
    /**
    * Date of birth
    */
    'dateOfBirth': string;
    'bankInfo': BankInfo;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "nationalId",
            "baseName": "nationalId",
            "type": "string"
        },
        {
            "name": "dateOfBirth",
            "baseName": "dateOfBirth",
            "type": "string"
        },
        {
            "name": "bankInfo",
            "baseName": "bankInfo",
            "type": "BankInfo"
        }    ];

    static getAttributeTypeMap() {
        return KycResponse.attributeTypeMap;
    }
}

