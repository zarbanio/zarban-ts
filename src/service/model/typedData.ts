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
import { Type } from './type';
import { TypedDataDomain } from './typedDataDomain';

export class TypedData {
    /**
    * A map where each key is a string and each value is a list of Type
    */
    'types': { [key: string]: Array<Type>; };
    'primaryType': string;
    'domain': TypedDataDomain;
    'message': { [key: string]: any; };

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "types",
            "baseName": "types",
            "type": "{ [key: string]: Array<Type>; }"
        },
        {
            "name": "primaryType",
            "baseName": "primaryType",
            "type": "string"
        },
        {
            "name": "domain",
            "baseName": "domain",
            "type": "TypedDataDomain"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "{ [key: string]: any; }"
        }    ];

    static getAttributeTypeMap() {
        return TypedData.attributeTypeMap;
    }
}

