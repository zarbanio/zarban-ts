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

export class FriendPoints {
    /**
    * the first name of the friend
    */
    'firstName': string;
    /**
    * the points of the friend
    */
    'points': number;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "points",
            "baseName": "points",
            "type": "number"
        }    ];

    static getAttributeTypeMap() {
        return FriendPoints.attributeTypeMap;
    }
}

