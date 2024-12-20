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
import type { Type } from './type';
import type { TypedDataDomain } from './typed-data-domain';
/**
 *
 * @export
 * @interface TypedData
 */
export interface TypedData {
    /**
     * A map where each key is a string and each value is a list of Type
     * @type {{ [key: string]: Array<Type> | undefined; }}
     * @memberof TypedData
     */
    'types': {
        [key: string]: Array<Type> | undefined;
    };
    /**
     *
     * @type {string}
     * @memberof TypedData
     */
    'primaryType': string;
    /**
     *
     * @type {TypedDataDomain}
     * @memberof TypedData
     */
    'domain': TypedDataDomain;
    /**
     *
     * @type {{ [key: string]: any | undefined; }}
     * @memberof TypedData
     */
    'message': {
        [key: string]: any | undefined;
    };
}
//# sourceMappingURL=typed-data.d.ts.map