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
import { ErrorMessage } from './errorMessage';

export class BetterError {
    /**
    * Localized error messages
    */
    'messages': { [key: string]: ErrorMessage; };
    'reasons': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "messages",
            "baseName": "messages",
            "type": "{ [key: string]: ErrorMessage; }"
        },
        {
            "name": "reasons",
            "baseName": "reasons",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return BetterError.attributeTypeMap;
    }
}

